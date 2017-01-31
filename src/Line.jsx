import React from 'react';

const Line = ({
	positions,
	color = '#000',
	thickness = 1,
}) => {
	const length = positions.length;

	const direction = [
		!!length ? 'M' : '',

		...positions.map((dataPoint, i) => {
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
