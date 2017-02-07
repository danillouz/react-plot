# React Plot [WIP]
📉 library for React.

# Why?
I want to learn more about SVG after coming across some resources showing the
simplicity, elegance and power of SVG. The most fun ones were [How to be a compiler with JavaScript](https://medium.com/@kosamari/how-to-be-a-compiler-make-a-compiler-with-javascript-4a8a13d473b4)
and playing around with [Elm Plot](https://terezka.github.io/elm-plot/).

# Getting started
```
npm i -S react-plot
```

_[React](https://facebook.github.io/react/) is a peer dependency for this library._

# Example
The following code:

```js
import React from 'react';
import { render } from 'react-dom';
import { Plot, Axis, Line } from 'react-plot';

const data = [
	[ 10, 490 ],
	[ 140, 380 ],
	[ 310, 420 ],
	[ 490, 10 ]
];

render(
	<Plot width={500} height={500} data={data}>
  	  <Line color="#6fc1ff" />
  	  <Axis orientation="left" />
  	  <Axis orientation="bottom" y />
    </Plot>,

	document.getElementById('root')
);
```

Renders:

![line](https://raw.githubusercontent.com/danillouz/react-plot/master/img/line.png "line")

# Whats next
At the moment the library exposes only this very simple line chart, but I'll
add more functionality when I have the time and learn more 😀.

# License
MIT Copyright (c) 2017 Daniël Illouz
