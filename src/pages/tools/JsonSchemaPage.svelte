<script lang="ts">
  import { useLocalStorage } from "utils/LocalStorage";
  import PrismWrapper from "components/PrismWrapper.svelte";
  import MarkdownDisplay from "components/markdown/MarkdownDisplay.svelte";

  const tscode = useLocalStorage("JsonSchemaPage.tscode", "");

  /// LETS
  let parsed;

  $: {
  }
</script>

<MarkdownDisplay url="" />

<div class="grid justify-items-start bg-red-100 w-min p-4 mb-4">
  <label for="regex" class="font-bold">TS code</label>
  <textarea
    id="regex"
    class="border-0 border-b-1 py-1 bg-inherit outline-none w-[400px] h-[300px] mb-4 font-mono"
    bind:value={$tscode}
  />
</div>

{#if parsed}
  <PrismWrapper lang="json" source={JSON.stringify(parsed, null, 2)} />
{/if}
