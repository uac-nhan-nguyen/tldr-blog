<script lang="ts">
  export let type: "primary" | "secondary" = "primary";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<button
  on:click={() => dispatch("click")}
  class="border-none px-4 py-2 font-bold cursor-pointer
{type === 'primary' ? 'bg-red-600 hover:bg-red-500 text-white' : ''}
{type === 'secondary' ? 'bg-yellow-300 hover:bg-yellow-200' : ''}
"><slot /></button
>
