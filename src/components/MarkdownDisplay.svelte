<script lang="ts">
  import { Converter } from "showdown";
  import { onMount } from "svelte";
  import MarkdownElement from "../pages/MarkdownElement.svelte";

  export let className: string = '';
  export let url: string | undefined = undefined;
  export let content: string | undefined = undefined;

  let htmlContent: string | undefined;

  const domParser = new DOMParser();

  const converter = new Converter({
    tables: true,
    extensions: [],
  });

  $: {
    if (url) {
      const _url = url;
      fetch(_url)
        .then((res) => res.text())
        .then((text) => {
          if (_url === url) {
            content = text;
          }
        });
    }
  }

  $: htmlContent = converter.makeHtml(content);

  let doc: Document | undefined;
  $: {
    doc = domParser.parseFromString(htmlContent, "text/html");
  }
</script>

<div class={className}>
  {#if doc}
    {#each Array.prototype.slice.call(doc.body.children) as el}
      <MarkdownElement {el} />
    {/each}
  {/if}
</div>
