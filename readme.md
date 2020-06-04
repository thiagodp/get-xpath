[![Build Status](https://travis-ci.org/thiagodp/get-xpath.svg?branch=master)](https://travis-ci.org/thiagodp/get-xpath)
[![npm version](https://badge.fury.io/js/get-xpath.svg)](https://badge.fury.io/js/get-xpath)
[![GitHub last commit](https://img.shields.io/github/last-commit/thiagodp/get-xpath.svg)](https://github.com/thiagodp/get-xpath/releases)
[![npm](https://img.shields.io/npm/l/get-xpath.svg)](https://github.com/thiagodp/get-xpath/blob/master/LICENSE.txt)

# get-xpath

> 📑 Extract the XPath of an HTML element

- Works on browsers (any), NodeJS and Deno.
- JavaScript (ES5) and TypeScript.
- No external dependencies.
- Unit-tested.
- Semantic Versioning.

## Install

```bash
npm i get-xpath
```

## API

```typescript
function getXPath( element: HTMLElement ): string;
```

## Usage

### Browser

```html
<script src="./node_modules/get-xpath/index.js" ></script>
<script>
console.log(
    getXPath( document.getElementById( 'foo' ) )
);
</script>
```

### NodeJS

```javascript
import { getXPath } from 'get-xpath';
console.log(
    getXPath( document.getElementById( 'foo' ) )
);
```

### Deno

```typescript
import { getXPath } from 'https://github.com/thiagodp/get-xpath/blob/master/index.js';
console.log(
    getXPath( document.getElementById( 'foo' ) )
);
```

## License

[MIT](LICENSE.txt) © [Thiago Delgado Pinto](https://github.com/thiagodp)
