import React, { Component, PropTypes } from 'react';

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

class Plot extends Component {
	constructor(props) {
		super(props);

		this.state = {
			positions: [ ]
		};
	}

	componentDidMount() {
		this.setState(function calculatePositions(prevState, props) {
			const {
				height: yMax,
				data
			} = props;

			const newPositions = data.map(([ x, y ]) => `${x} ${yMax - y}`);

			return {
				positions: [
					...prevState.positions,
					...newPositions
				]
			};
		});
	}

	render() {
		const {
			width,
			height,
			children
		} = this.props;

		const {
			positions
		} = this.state;

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
								positions,
								xMax: width,
								yMax: height
							}
						)
					)
				}
			</Graph>
		);
	}
};

Plot.PropTypes = {
	width: number.isRequired,
	height: number.isRequired,
	data: arrayOf(array)
};

export default Plot;