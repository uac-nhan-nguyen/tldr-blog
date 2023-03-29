<script lang="ts">
  import TimerButton from "../components/TimerButton.svelte";
  import MarkdownPage from "../components/MarkdownDisplay.svelte";

  const content = `
# Too Long. Don't Read
More expressions. Less words
<br>
Writter in svelte + typescript + markdown
    `;
</script>

<div class="grid justify-items-start">
  <section class="mb-[32px]">
    <MarkdownPage {content} />
  </section>
  <a href="https://github.com/uac-nhan-nguyen/tldr-blog" target="_blank">
    <img
      alt="github badge"
      height="32"
      src="https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=181717&logo=GitHub&logoColor=FFFFFF&label="
    />
  </a>
</div>

<style>
  /* h1 + p {
    margin: 0;
  } */
</style>
