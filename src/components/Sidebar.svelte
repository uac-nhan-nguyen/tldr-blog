<script lang="ts">
  import { Link, useLocation } from "svelte-navigator";
  import MenuItem, { getSelectedMenuItem, type MenuItemType } from "./MenuItem.svelte";

  export let menus: MenuItemType[];
  export let title: string;
  let selected: MenuItemType | undefined;

  let hide = false;

  const location = useLocation();
  $: {
    selected = getSelectedMenuItem(menus, $location.pathname);

    hide = selected?.[3]?.hide;
    if (selected?.[0]){
      document.title = selected[0]
    }
    else {
      document.title = "Too Long. Don't Read."
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');

  h1{
    font-family: 'Abril Fatface', serif;
  }
</style>

<div class="pl-1 duration-100 {hide?'opacity-20':''}">
  <Link class="no-underline text-black " to="/">
    <h1 class="text-[32px] md:text-[48px] font-[600] m-0">{title}</h1>
  </Link>
  <nav>
    {#each menus as menu}
      <MenuItem item={menu} selectedItem={selected}/>
    {/each}
  </nav>
</div>
