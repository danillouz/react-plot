import React, { PropTypes } from 'react';

const {
	number,
	array,
	arrayOf
} = PropTypes;

function _roundForStep(maxValue, step) {
	const rest = maxValue % step;
	const mustRound = rest > 0;

	if (mustRound) {
		const correction = step - rest;

		return maxValue + correction;
	}

	return maxValue;
}

const Graph = ({ width, height, children }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
	>
		{children}
	</svg>
);

const Plot = ({
	width,
	height,
	xStep,
	yStep,
	data,
	children
}) => {
	const xValues = data.map(([ x ]) => x);
	const xMax = Math.max(...xValues);
	const xRound = _roundForStep(xMax, xStep);
	const xPositions = xValues.map(x => {
		const ratio = x / xRound;
		const position = width * ratio;

		return position;
	});
	const xTickCount = xRound / xStep;
	const xTickTravel = width / xTickCount;

	const yValues = data.map(([ , y ]) => y);
	const yMax = Math.max(...yValues);
	const yRound = _roundForStep(yMax, yStep);
	const yPositions = yValues.map(y => {
		const ratio = y / yRound;
		const position = height * ratio;

		return position;
	});
	const yTickCount = yRound / yStep;
	const yTickTravel = height / yTickCount;

	const positions = [ ];

	for (let i = 0; i < data.length; i++) {
		positions[i] = [xPositions[i], yPositions[i]];
	}

	return (
		<Graph
			width={width}
			height={height}
		>
			{
				React.Children.map(
					children,
					child => React.cloneElement(
						child,
						{
							width,
							height,
							positions,
							xTick: [ xTickCount, xTickTravel ],
							yTick: [ yTickCount, yTickTravel ]
						}
					)
				)
			}
		</Graph>
	);
}

Plot.PropTypes = {
	width: number.isRequired,
	height: number.isRequired,
	data: arrayOf(array)
};

export default Plot;