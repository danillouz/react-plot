import React from 'react';

const Plot = ({
	width,
	height,
	viewBox,
	caption,
	children
}) => (
	<figure>
		<figcaption>
			{caption}
		</figcaption>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox={viewBox}
		>
			{children}
		</svg>
	</figure>
);

export default Plot;
