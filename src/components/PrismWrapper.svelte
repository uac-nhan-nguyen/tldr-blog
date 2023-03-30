<script lang="ts">
  import Prism from "svelte-prism";
  import 'prismjs/components/prism-json';
  import 'prismjs/components/prism-json5';

  export let className = '';
  export let classLabel = '';
  export let lang = undefined;
  export let source;
  export let label = undefined;

  $: {
    if ((lang || label) && !source?.startsWith("\n")) source = "\n" + source;
  }
</script>

<div class="container {className || 'container-default'}">
  <Prism language={lang} {source} />
  {#if lang || label}
    <div class="language-tag {classLabel || 'color'}">{lang} {label?`| ${label}`:''}</div>
  {/if}
</div>

<style lang="scss">
  .container {
    position: relative;

    .language-tag {
      position: absolute;
      top: 0;
      left: 0;

      padding: 0 0.5em;

      font-size: 1em;
      line-height: 1.5;
    }

    .color {
      background-color: #d4d4d4;
    }

    &-default {
      overflow: auto;
    }
  }
</style>
