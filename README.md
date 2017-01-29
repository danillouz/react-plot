# React Plot [WIP]
📉 library for React.

# Why?
To learn more about SVG after coming across resources showing the simplicity,
elegance and power of SVG. The most fun ones were [How to be a compiler with JavaScript](https://medium.com/@kosamari/how-to-be-a-compiler-make-a-compiler-with-javascript-4a8a13d473b4)
and playing around with [Elm Plot](https://terezka.github.io/elm-plot/).

# Example
The following code:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Plot, Axis, Line } from 'react-plot';

const data = [
	[ 10, 490 ],
	[ 140, 380 ],
	[ 310, 420 ],
	[ 490, 10 ]
];

ReactDOM.render(
	<Plot width="500" height="500" viewBox="0 0 500 500">
  	  <Line data={data} color="#6fc1ff" thickness={3} max={500} />
  	  <Axis x thickness={3} length={500} />
  	  <Axis y thickness={3} length={500} />
    </Plot>,

	document.getElementById('root')
);
```

Renders:

![line](https://raw.githubusercontent.com/danillouz/react-plot/master/img/line.png "line")

At the moment the library exposes only this very simple line chart, but I'll
add more functionality when I have the time 😀.

# License
MIT Copyright (c) 2017 Daniël Illouz
