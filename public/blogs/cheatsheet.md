# Dev Cheatsheet

Try to have all on one page

## Useful links

[List Tailwind Colors](https://tailwindcss.com/docs/customizing-colors)


## About size

- add `svelte-prism` increase gzip size by 11kb (from ~52kb to ~63kb) 
- add support for `json` and `json5` for prism increase gzip size by 2kb


## Some codes

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
- get value from `subscribe` by prefixing $ `$count`

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