import { STRATAGEMS } from './stratagems.mjs';

let inlineSVGs = '';
let sortedStratagems = Object.entries(STRATAGEMS)
	.sort(([itemA], [itemB]) => {
		return itemA > itemB ? 1 : -1;
	});

sortedStratagems.forEach(([itemId, itemValue]) => {
	inlineSVGs += `
		<div>
			<dt>${ itemId }</dt>
			<dd>
				<load-file replaceWith src="./icons/${ itemValue.filename}.svg"></load-file>
				<img width="64" height="64" src="./icons/${itemValue.filename}.svg" alt="${itemValue.label}">
			</dd>
		</div>
	`;
});

document.querySelector('aside').innerHTML += `
	<dl>
		${ inlineSVGs }
	</dl>
`;