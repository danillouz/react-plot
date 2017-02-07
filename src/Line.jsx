import React from 'react';

const Line = ({
	width,
	height,
	positions,
	color = '#000',
	thickness = 1,
}) => {
	const direction = [
		!!positions.length ? 'M' : '',

		...positions
			.map(([ x, y ]) => `${x} ${height - y}`)	
			.map((dataPoint, i) => {
				const isLast = i === positions.length - 1;

				return !isLast ? `${dataPoint} L` : `${dataPoint}`;
			})
	].join(' ');

	return (
		<g>
			<path
				d={direction}
				fill="none"
				strokeLinecap="round"
				stroke={color}
				strokeWidth={thickness}
			/>
		</g>
	);
};

export default Line;
