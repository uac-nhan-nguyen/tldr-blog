# Dev Cheatsheet

Try to have all on one page

## Useful links

[List Tailwind Colors](https://tailwindcss.com/docs/customizing-colors)


## About size

- add `svelte-prism` increase gzip size by 11kb (from ~52kb to ~63kb) 


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