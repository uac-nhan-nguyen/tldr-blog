<script context="module" lang="ts">
  export type MenuItemType = [
    string,
    string?,
    MenuItemType[]?,
    {
      hide?: boolean;
    }?
  ];

  export const getSelectedMenuItem = (
    menus: MenuItemType[],
    path: string
  ): MenuItemType | null => {
    const found = menus.find((i) => i[1] === path);
    if (found) return found;

    for (let i = 0; i < menus.length; i++) {
      const menu = menus[i];
      const found = menu[2] && getSelectedMenuItem(menu[2], path);
      if (found) return found;
    }
    return null;
  };
</script>

<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";

  export let item: MenuItemType;
  export let level: number = 0;
  export let selectedItem: MenuItemType | undefined;
</script>

<div class="grid ">
  {#if item[1]}
    <Link
      class="cursor-pointer hover:font-[600] md:hover:font-[700] 
      truncate
      tracking-tight
      text-[10px] sm:text-lg
      {level > 0 ? "pl-[4px] sm:pl-[8px]" : ""}
      text-black no-underline py-1 px-2 duration-100 
      {selectedItem === item ? 'bg-slate-300' : 'bg-white'}"
      to={item[1]}>{selectedItem === item ? '' : ''}{item[0]}</Link
    >
  {:else}
    <!-- Title -->
    <div class="text-[14px] sm:text-sm text-slate-400">{item[0]}</div>
  {/if}
  {#if item[2]}
    <div class="grid">
      {#each item[2] as menu}
        <svelte:self item={menu} level={level + 1} {selectedItem} />
      {/each}
    </div>
  {/if}
</div>
