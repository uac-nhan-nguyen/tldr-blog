<script lang="ts">
  import PrismWrapper from "../components/PrismWrapper.svelte";

  export let el: HTMLElement;

  const tagClass = "ml-2 font-mono font-bold text-neutral-400 text-[11px]";

  let source, lang;
  if (el instanceof HTMLPreElement && el.children.length > 0) {
    const first = el.children[0];
    if (first.tagName === "CODE" && first instanceof HTMLElement) {
      source = first.innerText;
      lang = first.className
        .split(" ")
        .find((i) => i.startsWith("lang"))
        ?.split("-")[1];
    }
  }
</script>

{#if el instanceof HTMLPreElement}
  {#if source}
    <PrismWrapper
      className="my-[14px] overflow-auto max-h-[30em]"
      {lang}
      {source}
    />
  {/if}
{:else if el.tagName === "H1"}
  <div class="flex items-baseline">
    <h1>
      {#each el.childNodes as child}
        <svelte:self el={child} />
      {/each}
    </h1>
    <span class={tagClass}>{el.tagName}</span>
  </div>
{:else if el.tagName === "H2"}
  <div class="flex items-baseline">
    <h2>
      {#each el.childNodes as child}
        <svelte:self el={child} />
      {/each}
    </h2>
    <span class={tagClass}>{el.tagName}</span>
  </div>
{:else if el.tagName === "H3"}
  <div class="flex items-baseline">
    <h3>
      {#each el.childNodes as child}
        <svelte:self el={child} />
      {/each}
    </h3>
    <span class={tagClass}>{el.tagName}</span>
  </div>
{:else if el.tagName === "H4"}
  <div class="flex items-baseline">
    <h4>
      {#each el.childNodes as child}
        <svelte:self el={child} />
      {/each}
    </h4>
    <span class={tagClass}>{el.tagName}</span>
  </div>
{:else if el.tagName === "H5"}
  <div class="flex items-baseline">
    <h5>
      {#each el.childNodes as child}
        <svelte:self el={child} />
      {/each}
    </h5>
    <span class={tagClass}>{el.tagName}</span>
  </div>
{:else if el.tagName === "BR"}
  <br />
{:else if el instanceof HTMLAnchorElement}
  <a href={el.href} target="_blank">
    {#each el.childNodes as child}
      <svelte:self el={child} />
    {/each}
  </a>
{:else if el.tagName === "P"}
  <p>
    {#each el.childNodes as child}
      <svelte:self el={child} />
    {/each}
  </p>
{:else if el.tagName === "OL"}
  <ol>
    {#each el.childNodes as child}
      <svelte:self el={child} />
    {/each}
  </ol>
{:else if el.tagName === "UL"}
  <ul>
    {#each el.childNodes as child}
      <svelte:self el={child} />
    {/each}
  </ul>
{:else if el.tagName === "LI"}
  <li>
    {#each el.childNodes as child}
      <svelte:self el={child} />
    {/each}
  </li>
{:else if el.tagName === "CODE"}
  <code class="px-1 bg-neutral-200">
    {#each el.childNodes as child}
      <svelte:self el={child} />
    {/each}
  </code>
{:else if el.tagName === "BLOCKQUOTE"}
  <blockquote class="px-1 bg-neutral-200">
    {#each el.childNodes as child}
      <svelte:self el={child} />
    {/each}
  </blockquote>
{:else if el instanceof Text}
  {el.wholeText}
{:else}
  <div class="font-bold text-red-600">
    Unhandle: <br />
    {el.tagName}
    {el.outerHTML}
    {el instanceof Node}
  </div>
{/if}

<style>
  h1 {
    font-size: 28px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 24px;
    margin-top: 48px;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 20px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  blockquote {
    border-left: solid 8px #ef4444;
    background-color: white;
    color: #404040;
  }
</style>
