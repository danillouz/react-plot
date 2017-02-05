import React from 'react';

const Line = ({
	width,
	height,
	data,
	color = '#000',
	thickness = 1,
}) => {
	const xValues = data.map(([ x ]) => x);
	const xMax = Math.max(...xValues);
	const xCor = xValues.map(x => {
		const ratio = x / xMax;
		const pos = width * ratio;

		return pos;
	});

	const yValues = data.map(([ , y ]) => y);
	const yMax = Math.max(...yValues);
	const yCor = yValues.map(y => {
		const ratio = y / yMax;
		const pos = height * ratio;

		return pos;
	});

	const count = data.length;
	const pos = [ ];

	for (let i = 0; i < count; i++) {
		pos[i] = [ xCor[i], yCor[i] ];
	}

	const positions = pos.map(([ x, y ]) => `${x} ${height - y}`);

	const direction = [
		!!count ? 'M' : '',

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
