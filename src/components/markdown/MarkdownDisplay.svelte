<script lang="ts">
  import { Converter } from "showdown";
  import MarkdownElement from "./MarkdownElement.svelte";

  export let className: string = '';
  export let url: string | undefined = undefined;
  export let content: string | undefined = undefined;

  let htmlContent: string | undefined;
  let slotText: string;

  const domParser = new DOMParser();

  const converter = new Converter({
    tables: true,
    extensions: [],
    disableForced4SpacesIndentedSublists: true,
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

  $: {
    if (slotText) content=slotText;
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

<span contenteditable="false" bind:textContent={slotText} class="hidden"> 
  <slot/>
</span>