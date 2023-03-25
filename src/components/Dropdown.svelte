<script context='module' lang="ts">
  export type DropdownItem = {
    value?: string;
    label: string;
  };
</script>

<script lang="ts">
  export let options: DropdownItem[];
</script>

<select>
  {#each options as item}
    <option value={item.value ?? item.label}>
      {item.label}
    </option>
  {/each}
</select>
