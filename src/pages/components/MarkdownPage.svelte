<script lang="ts">
  import MarkdownDisplay from "components/markdown/MarkdownDisplay.svelte";

  let url = "/blogs/markdown-display.md";
</script>

<div class="grid justify-items-start bg-red-100 w-min p-4">
  <label for="url" class="font-bold">Paste a .md url here to preview</label>
  <input id="url" class="border-0 border-b-1 py-1 bg-inherit outline-none w-[200px]" bind:value={url} />
</div>

<MarkdownDisplay bind:url={url} />
