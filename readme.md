[![npm (tag)](https://img.shields.io/npm/v/get-xpath?color=green&label=NPM&style=for-the-badge)](https://github.com/thiagodp/get-xpath/releases)
[![Build Status](https://img.shields.io/github/actions/workflow/status/thiagodp/get-xpath/test.yml?style=for-the-badge&color=green)](https://github.com/thiagodp/get-xpath/actions)
[![License](https://img.shields.io/npm/l/get-xpath.svg?style=for-the-badge&color=green)](https://github.com/thiagodp/get-xpath/blob/master/LICENSE.txt)
[![npm](https://img.shields.io/npm/dt/get-xpath?style=for-the-badge&color=green)](https://www.npmjs.com/package/get-xpath)

# get-xpath

> 📑 Extract the XPath of an HTML element

- Works with browsers, [NodeJS](https://nodejs.org/) and [DenoJS](https://deno.land/) (JavaScript 5 and TypeScript)
- No external dependencies
- Unit-tested
- Semantic Versioning

## Install

```bash
npm i get-xpath
```

## API

```typescript
function getXPath( element: HTMLElement, options?: Partial< Options > ): string;
```

Where `options` is an optional object containing:

| name       | type    | description                           |
|------------|---------|---------------------------------------|
| `ignoreId` | boolean | Do not take elements' ID into account |

Example:

```html
<html>
    <body>
        <div id="x" ></div>
        <script>
            const div = document.getElementById( 'x' );
            const xpath1 = getXPath( div ); // returns '//*[@id="x"]'
            const xpath2 = getXPath( div, { ignoreId: true } ); // returns '/html/body/div'
        </script>
    </body>
</html>
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
