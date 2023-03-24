<script lang="ts">
  import type { MenuItemType } from "./MenuItem";
  import MenuItem from "./MenuItem.svelte";

  const menus: MenuItemType[] = [["AWS", null, [["CMS with DynamoDB"]]]];
</script>

<div>
  <h1 class="text-[48px] font-[600]">tl;dr;</h1>
  {#each menus as menu}
    <MenuItem item={menu} />
  {/each}
</div>
