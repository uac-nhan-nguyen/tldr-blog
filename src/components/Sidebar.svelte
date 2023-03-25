<script lang="ts">
  import { useLocation } from "svelte-navigator";
  import MenuItem, { getSelectedMenuItem, type MenuItemType } from "./MenuItem.svelte";

  export let menus: MenuItemType[];
  export let title: string;
  let selected: MenuItemType | undefined;

  let hide = false;

  const location = useLocation();
  $: {
    selected = getSelectedMenuItem(menus, $location.pathname);
    hide = selected[3]?.hide;
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');

  h1{
    margin: 0;
    font-family: 'Abril Fatface', serif;
  }
</style>

<div class="pl-1 duration-100 {hide?'opacity-20':''}">
  <h1 class="text-[48px] font-[600]">{title}</h1>
  <nav>
    {#each menus as menu}
      <MenuItem item={menu} selectedItem={selected}/>
    {/each}
  </nav>
</div>
