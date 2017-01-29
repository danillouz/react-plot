import React from 'react';

const Axis = ({
	x,
	y,
	length,
	color = '#ccc',
	thickness = '1'
}) => {
	let moveTo;
	let orientation;

	if (x) {
		moveTo = `M 0 ${length}`;
		orientation = 'h';
	}

	if (y) {
		moveTo = `M 0 0`;
		orientation = 'v';
	}

	if (!orientation) {
		throw new Error(
			'Provide an axis orientation: "<Axis x />" or "<Axis y />".'
		);
	}

	return (
		<g>
			<path
				d={`${moveTo} ${orientation} ${length}`}
				stroke={color}
				strokeWidth={thickness}
			/>
		</g>
	);
};

export default Axis;
