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

# Example - simple
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
    </Plot>,

	document.getElementById('root')
);
```

Renders:

![simple](https://raw.githubusercontent.com/danillouz/react-plot/master/img/simple.png "simple")

# Example - advanced
The following code:

```js
import React from 'react';
import { render } from 'react-dom';
import { Plot, Axis, Line } from 'react-plot';

const data = [
	[ 50, 470 ],
	[ 150, 300 ],
	[ 310, 420 ],
	[ 490, 10 ]
];

render(
	<div>
		<Plot width={400} height={200} xStep={50} yStep={100} data={data} >
			<Line color="#6fc1ff" />

			<Axis orientation="left" />
			<Axis orientation="bottom" />
		</Plot>

		<Plot width={600} height={400} xStep={50} yStep={100} data={data} >
			<Line color="#ff2c6d" />
			
			<Axis orientation="right" />
			<Axis orientation="top" customLabel={(i, l) => i % 2 > 0 ? '' : l} />
		</Plot>
	</div>,

	document.getElementById('root')
);
```

Renders:

![advanced](https://raw.githubusercontent.com/danillouz/react-plot/master/img/advanced.png "advanced")

# Caveats
At the moment the viewbox is cut off, so for the plot to render properly you
must add padding to to the `svg` element. For example:

```css
svg {
	padding: 5em;
}
```

# Whats next
At the moment the library exposes only this very simple line chart, but I'll
add more functionality when I have the time and learn more 😀.

# License
MIT Copyright (c) 2017 Daniël Illouz
