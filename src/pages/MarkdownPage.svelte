<script lang="ts">
  import { Converter } from "showdown";
  export let url: string;
  let htmlContent: string | undefined;

  const classMap = {
    h1: "text-[20px]",
    h2: "",
    ul: "",
    li: "",
    code: "bg-slate-100 px-1"
  };

  const bindings = Object.keys(classMap).map((key) => ({
    type: "output",
    regex: new RegExp(`<${key}(.*)>`, "g"),
    replace: `<${key} class="${classMap[key]}" $1>`,
  }));

  const converter = new Converter({
    tables: true,
    extensions: [...bindings],
  });

  fetch(url)
    .then((res) => res.text())
    .then((text) => {
      htmlContent = converter.makeHtml(text);
    });
</script>

<div>
  <div contenteditable="false" bind:innerHTML={htmlContent} />
</div>
