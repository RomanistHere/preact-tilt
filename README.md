preact-tilt
===========

[![npm version][npm-badge]][npm-url]
[![npm downloads][downloads-badge]][npm-url]
[![dependencies Status][dependencies-badge]][npm-url]
[![npm bundle size][size-badge]][npm-url]
[![npm downloads][license-badge]][license-url]


A Preact port of the [vanilla-tilt.js](https://micku7zu.github.io/vanilla-tilt.js/index.html) version of [Tilt.js](http://gijsroge.github.io/tilt.js/) based on React [port](https://github.com/jonahallibone/react-tilty).

A tiny requestAnimationFrame powered 60+fps lightweight parallax hover tilt effect for **Preact**
Add server-side pre-rendering check for window.

Check out a simple demo [here!](https://codesandbox.io/s/73rqoq599j?fontsize=14)

## Installation

This package is hosted on [npm](https://www.npmjs.com/package/preact-tilt)

`npm install preact-tilt --save`

## How to Use

This component is imported and used like any standard Preact component

```jsx
import { Component } from 'preact/compat'
import Tilt from "preact-tilt";

class App extends Component {
  render() {
    return (
      <div class="App">
        <Tilt></Tilt>
      </div>
    );
  }
}

export default App;
```

## Options

Tilt has a variety of options which can be passed in either as a settings object prop or as individual properties using `data-tilt-{propertyname}`

Here is a list of available options with their defaults:
```js
reverse:                false   // Reverse the tilt direction
max:                    35      // Max tilt rotation (degrees)
perspective:            1000    // Transform perspective, the lower the more extreme the tilt gets.
scale:                  1       // 2 = 200%, 1.5 = 150%, etc..
speed:                  300     // Speed of the enter/exit transition
transition:             true    // Set a transition on enter/exit.
axis:                   null    // What axis should be disabled, can be X or Y.
reset:                  true    // If the tilt effect has to be reset on exit
easing:                 "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit
glare:                  false   // if it should have a "glare" effect
"max-glare":            1       // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
"glare-prerender":      false   // false = VanillaTilt creates the glare elements for you, otherwise
                                // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
gyroscope:              true    // Boolean to enable/disable device orientation detection
gyroscopeMinAngleX:     -45     // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element
gyroscopeMaxAngleX:     45      // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element
gyroscopeMinAngleY:     -45     // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element
gyroscopeMaxAngleY:     45      // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element
```

**Example:**

```jsx
<Tilt
  data-tilt-reverse="true"
  data-tilt-axis="x"
  settings = {{
    scale: 1.2,
    perspective: 900,
    reset: false
  }}>
</Tilt>
```

### Creating a Parallax Effect

In order to add a parallax effect to the element and it's child, you must add some css properties to them:
- Add `transform-style: preserve-3d` to your tilt element
- Add `transform: translateZ(20px)` to your child element (this pixel value can be increased to cause the child element to feel more separated)


```jsx
<Tilt style={{transformStyle: "preserve-3d"}}>
  <div style={{transform: "translateZ(30px)"}}></div>
</Tilt>
```

### Tilt Change Event

You can add an event listener to the component's `tiltChange` event in order to access it's x and y tilts, percentages, and overall angle

```jsx
componentDidMount() {
  const tilt = document.querySelector('#tilt');
  tilt.addEventListener("tiltChange", e => {
    console.log(e.detail);
    // {
    //   tiltX: "-4.90",
    //   tiltY: "3.03",
    //   percentageX: 64,
    //   percentageY: 58.666,
    //   angle: 121.751281
    // }
  });
}
```

### Attributions

- [tilt.js](https://github.com/gijsroge/tilt.js) created by [Gijs Rogé](https://github.com/gijsroge)
- [vanilla-tilt.js](https://github.com/micku7zu/vanilla-tilt.js) created by [Șandor Sergiu](https://github.com/micku7zu)

### License

[MIT License](./LICENSE)



[npm-url]:https://www.npmjs.com/package/preact-tilt
[license-url]:./LICENSE

[npm-badge]:https://badge.fury.io/js/preact-tilt.svg
[downloads-badge]:https://badgen.net/npm/dt/preact-tilt
[size-badge]:https://img.shields.io/bundlephobia/minzip/preact-tilt.svg
[dependencies-badge]:https://david-dm.org/jonahallibone/preact-tilt/status.svg
[license-badge]:https://badgen.net/npm/license/preact-tilt
