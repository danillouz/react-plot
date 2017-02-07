import React from 'react';

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

const Label = ({
	x,
	y,
	textAnchor,
	fill,
	text
}) => (
	<text
		x={x}
		y={y}
		textAnchor={textAnchor}
		fill="#aaa"
	>
		{text}
	</text>
)

const Axis = ({
	width,
	height,
	xTick: [ xTickCount, xTickTravel, xMaxRounded ],
	yTick: [ yTickCount, yTickTravel, yMaxRounded ],
	orientation,
	customLabel,
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
	const defaultLabelStep = isX
		? xMaxRounded / xTickCount
		: yMaxRounded / yTickCount;

	const max = isX ? xTickCount: yTickCount;
	const tickLength = 8;
	const labelCorrection = 5;
	const ticks = [ ];
	const labels = [ ];

	for (let i = 0; i < max + 1; i++) {
		let direction;
		let labelAnchor;
		let labelX;
		let labelY;

		if (orientation === 'left') {
			direction = `M 0 ${i * yTickTravel} h -${tickLength}`;

			labelAnchor = 'end';
			labelX = 0 - tickLength - labelCorrection;
			labelY = height - (i * yTickTravel - 5);
		}

		if (orientation === 'right') {
			direction = `M ${width} ${i * yTickTravel} h ${tickLength}`;

			labelAnchor = 'start';
			labelX = width + tickLength + labelCorrection;
			labelY = height - (i * yTickTravel - 5);
		}

		if (orientation === 'top') {
			direction = `M ${i * xTickTravel} 0 v -${tickLength}`;

			labelAnchor = 'middle';
			labelX = i * xTickTravel;
			labelY = 0 - tickLength - labelCorrection;
		}

		if (orientation === 'bottom') {
			direction = `M ${i * xTickTravel} ${height} v ${tickLength}`;

			labelAnchor = 'middle';
			labelX = i * xTickTravel;
			labelY = height + tickLength + labelCorrection + 10;
		}

		ticks.push(
			<Tick
				key={i}
				direction={direction}
			/>
		);

		const defaultLabelText = defaultLabelStep * i;
		const labelText = typeof customLabel === 'function'
			? customLabel(i, defaultLabelText)
			: defaultLabelText;

		labels.push(
			<Label
				key={i}
				x={labelX}
				y={labelY}
				textAnchor={labelAnchor}
				text={labelText}
			/>
		);
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

			<g>
				{labels}
			</g>
		</g>
	);
};

export default Axis;
