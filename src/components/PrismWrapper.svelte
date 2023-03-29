<script lang="ts">
  import Prism from "svelte-prism";

  export let className = "";
  export let lang;
  export let source;

  $: {
    if (lang && !source.startsWith("\n")) source = "\n" + source;
  }
</script>

<div
  class="{className} relative border-solid border-1 border-neutral-300"
>
  <Prism language={lang} {source} />
  {#if lang}
    <div class="language-tag bg-neutral-300">{lang}</div>
  {/if}
</div>

<style>
  .language-tag {
    position: absolute;
    top: 0;
    left: 0;

    padding: 0 0.5em;

    font-size: 1em;
    line-height: 1.5;
  }
</style>
