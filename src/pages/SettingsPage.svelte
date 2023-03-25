<script lang="ts">
  import Dropdown, { type DropdownItem } from "../components/Dropdown.svelte";

  const fontOptions: DropdownItem[] = [
    {
      label: "Poiret One",
    },
  ];
</script>

<div>
  <h1>Settings</h1>

  <div>
    <div />
    <Dropdown options={fontOptions} />
  </div>
</div>
