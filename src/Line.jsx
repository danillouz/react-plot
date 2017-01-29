import React from 'react';

const Line = ({
	data,
	max,
	color = '#000',
	thickness = '1',
}) => {
	const direction = data
		.map(([ x, y ]) => `${x} ${max - y}`)
		.map((dataPoint, i) => {
			const isLast = i === data.length - 1;

			return !isLast ? `${dataPoint} L ` : `${dataPoint}`;
		})
		.join('');

	return (
		<g>
			<path
				d={`M ${direction}`}
				fill="none"
				strokeLinecap="round"
				stroke={color}
				strokeWidth={thickness}
			/>
		</g>
	);
};

export default Line;
