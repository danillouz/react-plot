import React from 'react';

const Axis = ({
	width,
	height,
	data,
	x,
	y,
	color = '#ccc',
	thickness = 1
}) => {
	const hasOrientation = x || y;

	if (!hasOrientation) {
		throw new Error(
			'Provide an axis orientation: "<Axis x />" or "<Axis y />".'
		);
	}

	const direction = x
		? `M 0 ${height} h ${width}`
		: `M 0 0 v ${height}`;

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
