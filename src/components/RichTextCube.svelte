<script lang="ts">
  // Start: 26-03-2023 15:51

  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import { isValidHttpUrl } from "../utils/common";

  const dispatch = createEventDispatcher();

  export let className = "";
  export let focusClass = "";
  export let classView = "";
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
  let holdingMeta = false;

  // true so that it would render the initial content
  let isFocus = true;

  const NBSP = "&nbsp;";

  // const handleDocKeydown = (e) => {
  //   if (e.key === "Meta") {
  //     holdingMeta = true;
  //   }
  // };
  // const handleDocKeyup = (e) => {
  //   if (e.key === "Meta") {
  //     holdingMeta = false;
  //   }
  // };

  onMount(() => {
    isFocus = false;

    // document.addEventListener("keyup", handleDocKeyup);
  });

  // onDestroy(() => {
  //   document.removeEventListener("keyup", handleDocKeyup);
  // });

  $: {
    dispatch("focus", isFocus);
  }

  const A_ONMOUSEDOWN = 'onmousedown="window.open(this.href,this.target)"';
  $: {
    if (!content) content = "";

    const area = Math.max(minWidth, width) * height;
    const squareW = Math.sqrt(area);
    minW = Math.max(minWidth, Math.ceil(squareW));
    minW = minW + (minW % stepWidth);
    textOutput = node?.innerText;
  }

  const handleInput = (e) => {};
</script>

{#if editable}
  <div
    class="w-min duration-75 {className} {isFocus ? focusClass : ''}"
    style="min-width: {minW}px;"
  >
    <div
      class="outline-none whitespace-pre-wrap"
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

        // const selection = window.getSelection();
        // if (!selection.rangeCount) return;
        // selection.deleteFromDocument();
        // selection.getRangeAt(0).insertNode(document.createTextNode(text));
        // selection.collapseToEnd();

        // convert selection to a link
        if (isValidHttpUrl(text)) {
          const selection = window.getSelection();
          if (selection.rangeCount) {
            // rangeCount is usually 1
            const selectedText = selection.getRangeAt(0).toString();

            if (selectedText) {
              document.execCommand(
                "insertHTML",
                true,
                `<a onmousedown="window.open(this.href, this.target)" class="font-bold underline text-blue-500 cursor-pointer" href="${text}" target="_blank">${selectedText}</a>`
              );
              return;
            }
          }
        }

        document.execCommand("insertText", true, text);
      }}
      on:keydown={(e) => {
        // console.log("KEYDOWN", e);
        if (e.key === "b" && e.metaKey) {
          e.preventDefault();
          document.execCommand("bold", true);
        } else if (e.key === "Meta") {
          holdingMeta = true;
        }
      }}
      on:keyup={(e) => {
        // console.log("KEYUP", e);
        if (e.key === "Meta") {
          holdingMeta = false;
        }
      }}
      on:input={(e) => {
        // console.log("INPUT", e);
      }}
    />
  </div>
{:else}
  <div
    class="w-min {className} {classView}"
    style="min-width: {minW}px;"
  >
    <div
      class="outline-none whitespace-pre-wrap"
      contenteditable="false"
      bind:innerHTML={content}
    />
  </div>
{/if}

{#if isFocus}
  <div
    class="w-min {className} "
    style="opacity: 0; pointer-events: none; position: fixed;"
    bind:clientHeight={height}
    bind:clientWidth={width}
  >
    <div
      class="outline-none whitespace-pre-wrap"
      contenteditable="false"
      bind:innerHTML={content}
    />
  </div>
{/if}
