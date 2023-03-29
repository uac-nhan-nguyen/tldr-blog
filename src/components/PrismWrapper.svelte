<script lang="ts">
  import Prism from "svelte-prism";

  export let className = '';
  export let lang;
  export let source;

  $: {
    if (lang && !source.startsWith("\n")) source = "\n" + source;
  }
</script>

<div class="container {className}">
  <Prism language={lang} {source} />
  {#if lang}
    <div class="language-tag">{lang}</div>
  {/if}
</div>

<style lang="scss">
  .container {
    position: relative;

    .language-tag {
      background-color: #d4d4d4;
      position: absolute;
      top: 0;
      left: 0;

      padding: 0 0.5em;

      font-size: 1em;
      line-height: 1.5;
    }
  }
</style>
