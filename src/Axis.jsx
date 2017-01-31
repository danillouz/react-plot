import React from 'react';

const Axis = ({
	x,
	y,
	xMax,
	yMax,
	color = '#ccc',
	thickness = 1
}) => {
	const hasOrientation = x || y;

	if (!hasOrientation) {
		throw new Error(
			'Provide an axis orientation: "<Axis x />" or "<Axis y />".'
		);
	}

	const direction = x ? `M 0 ${yMax} h ${xMax}` : `M 0 0 v ${yMax}`;

	return (
		<g>
			<path
				d={direction}
				stroke={color}
				strokeWidth={thickness}
			/>
		</g>
	);
};

export default Axis;
