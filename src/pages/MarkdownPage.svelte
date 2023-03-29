<script lang="ts">
  import { Converter } from "showdown";
  import { onMount } from "svelte";
  import MarkdownElement from "./MarkdownElement.svelte";

  export let url: string | undefined = undefined;
  export let content: string | undefined = undefined;

  let htmlContent: string | undefined;

  const domParser = new DOMParser();

  const converter = new Converter({
    tables: true,
    extensions: [],
  });

  onMount(() => {
    if (url) {
      fetch(url)
        .then((res) => res.text())
        .then((text) => {
          content = text;
        });
    }
  });

  $: htmlContent = converter.makeHtml(content);

  let doc: Document | undefined;
  $: {
    doc = domParser.parseFromString(htmlContent, "text/html");
  }
</script>

<div>
  {#if doc}
    {#each Array.prototype.slice.call(doc.body.children) as el}
      <MarkdownElement {el} />
    {/each}
  {/if}
</div>
