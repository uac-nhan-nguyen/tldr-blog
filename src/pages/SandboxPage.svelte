<script lang="ts">
  import PrismWrapper from "components/PrismWrapper.svelte";
    import MarkdownPage from "components/markdown/MarkdownDisplay.svelte";

  const lang = "css";
  let source = `.md-pre {
  overflow: auto;
  padding-top: 21px;
  padding-bottom: 21px;
  max-height: 30em;

  background: linear-gradient(180deg,rgb(241 245 249),rgb(241 245 249) 50%,white 0,white);
  background-size: 3em 3em;
  background-attachment: local;

  border: 1px solid rgb(241 245 249);
}

.md-pre.unlimited-height-code {
  max-height: none
}

.md-code {
  position: relative;
  overflow: visible;
  max-height: none;

  height: 100%;
  display: block;

  border: 0;
  background: none;
  line-height: 1.5;
}
  `;
</script>

<PrismWrapper {source} {lang} />
<MarkdownPage url='/blogs/markdown-test.md'/>
