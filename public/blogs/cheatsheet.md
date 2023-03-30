# Dev Cheatsheet

Try to have all on one page

## Useful links

[List Tailwind Colors](https://tailwindcss.com/docs/customizing-colors)


## About size

- add `svelte-prism` increase gzip size by 11kb (from ~52kb to ~63kb) 
- add support for `json` and `json5` for prism increase gzip size by 2kb


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
import { writable } from 'svelte/store'

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
declare to attach to global sandbox object [stackoverflow](https://stackoverflow.com/questions/45673961/how-to-write-global-functions-in-postman)

```js
const Ajv = require('ajv')
ajv = new Ajv({ logger: console })
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
