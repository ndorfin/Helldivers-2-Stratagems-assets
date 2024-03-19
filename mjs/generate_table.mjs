import { GROUPS, TYPES } from './metadata.mjs';
import { STRATAGEMS } from './stratagems.mjs';

let sectionAllList = '';

Object.entries(STRATAGEMS)
	.sort(([itemA], [itemB]) => {
		return itemA > itemB ? 1 : -1;
	})
	.forEach(([itemId, itemValue]) => {
		sectionAllList += `
			<tr>
				<td headers="all_header_icon row_all_${ itemId }">
					<img width="64" height="64" src="./icons/${itemValue.filename}.svg" alt="${itemValue.label}">
				</td>
				<th headers="all_header_id" id="row_all_${ itemId }" scope="row">
					<code>${ itemId }</code><br>
					${ itemValue.label }
				</th>
				<td headers="all_header_attributes row_all_${ itemId }">
					${ TYPES[itemValue.type].label }<br>
					${ GROUPS[itemValue.group_id].label }
				</td>
				<td headers="all_header_uses row_all_${ itemId }" class="amount">
					${ (itemValue.uses > -1) ? itemValue.uses : '<span class="not_applicable">∞</span>'}
				</td>
				<td headers="all_header_cooldown row_all_${ itemId }" class="amount">
					${ (itemValue.cooldown > 0) ? itemValue.cooldown + '<abbr title="Seconds">s</abbr>' : '<span class="not_applicable">N/A</span>'}
				</td>
				<td headers="all_header_call_in_time row_all_${ itemId }" class="amount">
					${ (itemValue.call_in_time) ? itemValue.call_in_time + '<abbr title="Seconds">s</abbr>' : '<span class="not_applicable">N/A</span>'}
				</td>
				<td headers="all_header_level_required row_all_${ itemId }" class="amount">
					${ (itemValue.level_required) ? itemValue.level_required : '<span class="not_applicable">N/A</span>'}
				</td>
				<td headers="all_header_cost row_all_${ itemId }" class="amount">
					${ (itemValue.currency_amount) ? itemValue.currency_amount.toLocaleString() + '<abbr title="Requisition slips">R</abbr>' : '<span class="not_applicable">Free</span>'}
				</td>
			</tr>
		`;
	});

let allSection = 
	`<table>
		<thead>
			<tr>
				<th scope="col" id="all_header_icon">Icon</th>
				<th scope="col" id="all_header_id">ID<br>Label</th>
				<th scope="col" id="all_header_attributes">Type<br>Group</th>
				<th scope="col" id="all_header_uses" class="amount">Uses</th>
				<th scope="col" id="all_header_cooldown" class="amount">Cooldown</th>
				<th scope="col" id="all_header_call_in_time" class="amount">Call-in<br>delay</th>
				<th scope="col" id="all_header_level_required" class="amount">Level<br>required</th>
				<th scope="col" id="all_header_cost" class="amount">Cost</th>
			</tr>
		</thead>
		<tbody>
			${ sectionAllList }
		</tbody>
	</table>`;

document.querySelector('main').innerHTML += allSection;