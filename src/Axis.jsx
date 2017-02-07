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
	const Y_ORIENTATIONS = [ 'left', 'right' ];

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
	const max = isX ? xTickCount : yTickCount;
	const tickLength = 8;
	const ticks = [ ];

	for (let i = 0; i < max; i++) {
		let direction;

		if (orientation === 'left') {
			direction = `M 0 ${i * yTickTravel} h -${tickLength}`;
		}

		if (orientation === 'right') {
			direction = `M ${width} ${i * yTickTravel} h ${tickLength}`;
		}

		if (orientation === 'top') {
			direction = `M ${i * xTickTravel} 0 v -${tickLength}`;
		}

		if (orientation === 'bottom') {
			direction = `M ${i * xTickTravel} ${height} v ${tickLength}`;
		}

		ticks.push(<Tick key={i} direction={direction} />);
	}

	let direction;

	if (orientation === 'left') {
		direction = `M 0 0 v ${height}`;
	}

	if (orientation === 'right') {
		direction = `M ${width} 0 v ${height}`;
	}

	if (orientation === 'top') {
		direction = `M 0 0 h ${width}`;
	}

	if (orientation === 'bottom') {
		direction = `M 0 ${height} h ${width}`;
	}

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
