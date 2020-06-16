[![Build Status](https://travis-ci.org/thiagodp/get-xpath.svg?branch=master)](https://travis-ci.org/thiagodp/get-xpath)
[![npm version](https://badge.fury.io/js/get-xpath.svg)](https://badge.fury.io/js/get-xpath)
[![GitHub last commit](https://img.shields.io/github/last-commit/thiagodp/get-xpath.svg)](https://github.com/thiagodp/get-xpath/releases)
[![npm](https://img.shields.io/npm/l/get-xpath.svg)](https://github.com/thiagodp/get-xpath/blob/master/LICENSE.txt)

# get-xpath

> 📑 Extract the XPath of an HTML element

- Works on browsers, [Node](https://nodejs.org/) and [Deno](https://deno.land/)
- Works with browsers, NodeJS and DenoJS (JavaScript 5 and TypeScript)
- No external dependencies
- Unit-tested
- Semantic Versioning

## Install

```bash
npm i get-xpath
```

## API

```typescript
function getXPath( element: HTMLElement ): string;
```

## Usage

**Notes**:
- On [Node](https://nodejs.org/) or [Deno](https://deno.land/), you have to provide a way to accessing or emulating the DOM.
You can use [JSDOM](https://github.com/jsdom/jsdom) (or any other library) for that.
- When using TypeScript, add the value `"dom"` to the property `"lib"`of your `tsconfig.json`. Otherwise you will probably get errors.

### Browser

Global:
```html
<script crossorigin src="https://unpkg.com/get-xpath" >
<script>
console.log(
    getXPath( document.getElementById( 'foo' ) )
);
</script>
```

ESM:
```html
<script type="module" >
import getXPath from 'https://unpkg.com/get-xpath/index.esm.js';
console.log(
    getXPath( document.getElementById( 'foo' ) )
);
</script>
```

### NodeJS

```javascript
/// <reference lib="dom" />
const getXPath = require('get-xpath');
console.log(
    getXPath( document.getElementById( 'foo' ) )
);
```

### Deno

```typescript
/// <reference lib="dom" />
import getXPath from 'https://unpkg.com/get-xpath/index.esm.js';
console.log(
    getXPath( document.getElementById( 'foo' ) )
);
```

## License

[MIT](LICENSE.txt) © [Thiago Delgado Pinto](https://github.com/thiagodp)
