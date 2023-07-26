# Frontend Svelte

## Recursive in #svelte

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

## Stores for sharing variable

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

## Import SVG

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