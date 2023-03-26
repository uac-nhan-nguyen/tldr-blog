<script lang="ts">
  // Start: 26-03-2023 15:51

  import {onMount} from 'svelte'
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let className = "";
  export let focusClass = "";
  export let minWidth = 40;
  export let stepWidth = 1;
  export let editable = false;
  export let content =
    "This rich text block is editable and resizes itself to be as close to a square as possible";
  export let textOutput = "";

  let node;

  let height = 0;
  let width = 0;

  let minW = 1;

  // true so that it would render the initial content
  let isFocus = true;



  onMount(() => {
    isFocus = false;
  })

  $: {
    dispatch('focus', isFocus)
  }

  $: {
    if (!content) content = "&nbsp;";

    const area = Math.max(minWidth, width) * height;
    const squareW = Math.sqrt(area);
    minW = Math.max(minWidth, Math.ceil(squareW));
    minW = minW + (minW % stepWidth);
    textOutput = node?.innerText;
  }

  const handleInput = (e) => {};
</script>

{#if editable}
  <div class="w-min {className} {isFocus ? focusClass : ''}" style="min-width: {minW}px;">
    <div
      class="outline-none "
      on:focus={() => (isFocus = true)}
      on:blur={() => (isFocus = false)}
      contenteditable="true"
      bind:innerHTML={content}
      bind:this={node}
      on:paste={(e) => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event
        e.preventDefault();

        let text = e.clipboardData.getData("text");

        // console.log("PASTE", text);

        const selection = window.getSelection();
        if (!selection.rangeCount) return;
        // selection.deleteFromDocument();
        // selection.getRangeAt(0).insertNode(document.createTextNode(text));
        // selection.collapseToEnd();
        document.execCommand("insertText", true, text);
      }}
    />
  </div>
{:else}
  <div class="w-min {className}" style="min-width: {minW}px;">
    <div contenteditable="false" bind:innerHTML={content} />
  </div>
{/if}
{#if isFocus}
  <div
    class="w-min {className} fixed opacity-0 pointer-events-none"
    bind:clientHeight={height}
    bind:clientWidth={width}
  >
    <div contenteditable="false" bind:innerHTML={content} />
  </div>
{/if}
