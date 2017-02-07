import React from 'react';

function _roundForStep(maxValue, step) {
	const rest = maxValue % step;
	const mustRound = rest > 0;

	if (mustRound) {
		const correction = step - rest;

		return maxValue + correction;
	}

	return maxValue;
}

const Tick = ({
	direction
}) => (
	<path
		fill="none"
		strokeWidth="1"
		stroke="#ccc"
		d={direction}
	/>
);

const Axis = ({
	width,
	height,
	xTick: [ xTickCount, xTickTravel ],
	yTick: [ yTickCount, yTickTravel ],
	orientation,
	color = '#ccc',
	thickness = 1
}) => {
	const X_ORIENTATIONS = [ 'top', 'bottom' ];
	const Y_ORIENTATIONS = [ 'left', 'rigth' ];

	const hasValidOrientation = [
		...X_ORIENTATIONS,
		...Y_ORIENTATIONS
	].includes(orientation);

	if (!hasValidOrientation) {
		throw new Error(
			'Provide an axis orientation: "top", "left", "bottom" or "right".'
		);
	}

	const isX = X_ORIENTATIONS.includes(orientation);
	const lineType = isX ? 'v' : 'h';
	const max = isX ? xTickCount : yTickCount;
	const tickLength = isX ? 8 : -8;
	const ticks = [ ];

	for (let i = 0; i < max; i++) {
		const M = isX
			? `M ${i * xTickTravel} ${height}`
			: `M 0 ${i * yTickTravel}`

		const direction = `${M} ${lineType} ${tickLength}`;

		ticks.push(<Tick key={i} direction={direction} />);
	}

	const direction = isX
		? `M 0 ${height} h ${width}`
		: `M 0 0 v ${height}`;

	return (
		<g>
			<path
				d={direction}
				stroke={color}
				strokeWidth={thickness}
			/>

			<g>
				{ticks}
			</g>
		</g>
	);
};

export default Axis;
