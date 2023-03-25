<script context="module" lang="ts">
  export type MenuItemType = [string, string?, MenuItemType[]?];
</script>

<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  type MenuItemType = [string, string?, MenuItemType[]?];

  export let item: MenuItemType;
  export let level: number = 0;
</script>

<div style="padding-left: {level * 12}px;">
  {#if item[1]}
    <Link class="cursor-pointer hover:font-[700] duration-100" to={item[1]}
      >{item[0]}</Link
    >
  {:else}
    <div class="">{item[0]}</div>
  {/if}
  {#if item[2]}
    {#each item[2] as menu}
      <svelte:self item={menu} level={level + 1} />
    {/each}
  {/if}
</div>
