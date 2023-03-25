<script lang="ts">
  import type { MenuItemType } from "./MenuItem";
  import MenuItem from "./MenuItem.svelte";

  export let menus: MenuItemType[];
  export let title: string;
</script>

<div>
  <h1 class="text-[48px] font-[600]">{title}</h1>
  <nav>
  {#each menus as menu}
    <MenuItem item={menu}/>
  {/each}
  </nav>
</div>
