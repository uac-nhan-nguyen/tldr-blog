# Dev Cheatsheet

Try to have all on one page

## Useful links

[List Tailwind Colors](https://tailwindcss.com/docs/customizing-colors)
[List Tabler Icons](https://tabler-icons.io)

## Frontend

### Recursive in #svelte

Also,

- export TS module in `.svelte` file
- `#if` directive
- `#each` directive

```svelte
<script context='module' lang="ts">
  export type NodeType = {
    name: string;
    children?: NodeType[];
  };
</script>

<script lang='ts'>
  export let level = 0;
  export let node: NodeType;
</script>

<div style="pad-left: {level*4}px;">{name}</div>
{#if node.children}
  {#each node.children as child}
    {svelte:self node={child} level={level + 1}}
  {/each}
{/if}
```

### Stores for sharing variable

[https://svelte.dev/tutorial/writable-stores](https://svelte.dev/tutorial/writable-stores)

Also,

- get value from `writable` by prefixing $ (i.e. `$counter`

```js
import {writable} from 'svelte/store'

export const counter = writable(0);
export const increment = () => counter.update(prev => prev + 1)
```

```svelte
<!-- In components -->
<script>
  import { counter, increment } from './counter'
</script>

<span>{$counter}</span>
<button on:click={increment}>+1</button>
```

### Import SVG

> 1. change `.svg` to `.svelte
> 2. add `<script>` tag

example `IconLock.svelte`

```svelte
<script lang="ts">
  export let size = 24;
</script>

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock" width="{size}" height="{size}"
     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
     stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
  <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
  <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
</svg>
```

## Testing

### Postman snippets

#### using chaijs

Postman uses [chaijs](https://www.chaijs.com).

```js
pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

pm.test("Response payload is correct", function () {
  var jsonData = pm.response.json();
  pm.expect(jsonData.jobId).to.be.a('string')
  pm.expect(jsonData.items).to.be.an('array')
});
```

#### using ajv

[ajv](https://ajv.js.org) is also available. [Whatever works](https://www.youtube.com/watch?v=7VeTEP3xoXo)

In Collection pre-request script,
declare to attach to global sandbox
object [stackoverflow](https://stackoverflow.com/questions/45673961/how-to-write-global-functions-in-postman)

```js
const Ajv = require('ajv')
ajv = new Ajv({logger: console})
```

in Request tests script

```js
pm.test("Response payload is correct", function () {
  var jsonData = pm.response.json();
  const schema = {
    type: 'object',
    required: ['accessToken'],
    properties: {
      accessToken: {type: 'string'}
    }
  };

  const valid = ajv.validate(schema, jsonData)
  if (!valid) pm.expect.fail(JSON.stringify(ajv.errors))
});
```

## Setup

### tsconfig.json

```json5
{
  // ...
  "compilerOptions": {
    // ...

    /** Map import paths */
    "paths": {
      "utils/*": [
        "./src/utils/*"
      ],
    }
  },
}
```


## Others

### dayjs

```js
// use [] to format with escape
const format = 'd [days] HH:mm:ss'
```