<script lang="ts">
  import showdown, { Converter } from "showdown";
  import MarkdownElement from "./MarkdownElement.svelte";
  export let url: string;

  let htmlContent: string | undefined;
  const domParser = new DOMParser();

  const classMap = {
    h1: "text-[28px]",
    h2: "text-[24px]",
    h3: "text-[20px]",
    ul: "",
    li: "",
  };

  const bindings = Object.keys(classMap).map((key) => ({
    type: "output",
    regex: new RegExp(`<${key}(.*)>`, "g"),
    replace: `<${key} class="${classMap[key]}" $1>`,
  }));
  const converter = new Converter({
    tables: true,
    extensions: [
      // ...bindings,
      {
        type: "lang",
        regex:
          /\[((?:\[[^\]]*]|[^\[\]])*)]\([ \t]*<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\4[ \t]*)?\)\{\:target=(["'])(.*)\6}/g,
        replace: function (wholematch, linkText, url, a, b, title, c, target) {
          var result = '<a href="' + url + '"';

          if (typeof title != "undefined" && title !== "" && title !== null) {
            title = title.replace(/"/g, "&quot;");
            title = showdown.helper.escapeCharacters(title, "*_", false);
            result += ' title="' + title + '"';
          }

          if (
            typeof target != "undefined" &&
            target !== "" &&
            target !== null
          ) {
            result += ' target="' + target + '"';
          }

          result += ">" + linkText + "</a>";
          return result;
        },
      },
    ],
  });

  fetch(url)
    .then((res) => res.text())
    .then((text) => {
      htmlContent = converter.makeHtml(text);
    });

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
