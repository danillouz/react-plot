import React, { PropTypes } from 'react';

const {
	number,
	array,
	arrayOf
} = PropTypes;

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
	data,
	children
}) => (
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
						data
					}
				)
			)
		}
	</Graph>
);

Plot.PropTypes = {
	width: number.isRequired,
	height: number.isRequired,
	data: arrayOf(array)
};

export default Plot;