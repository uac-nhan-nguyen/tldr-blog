<script lang="ts">
    import { Router, Route, Link } from "svelte-navigator";
  type MenuItemType = [string, string?, MenuItemType[]?];

  export let item: MenuItemType;
</script>

{#if item[1]}
  <Link class="cursor-pointer hover:font-[700] duration-100" to={item[1]}>{item[0]}</Link>
{:else}
  <div class="cursor-pointer hover:font-[700] duration-100">{item[0]}</div>
{/if}
{#if item[2]}
  {#each item[2] as menu}
    <svelte:self item={menu} />
  {/each}
{/if}
