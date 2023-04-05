<script lang="ts">
  import MarkdownPage from "components/markdown/MarkdownDisplay.svelte";
  import {getLocalStorage, setLocalStorage} from "utils/LocalStorage";
  import TimeAgo from "components/TimeAgo.svelte";

  const content = `
# Too Long. Don't Read
More expressions. Less words
<br>
Writter in svelte + typescript + markdown
    `;

  const lastVisit = getLocalStorage('last-visit', Date.now());
  setLocalStorage('last-visit', Date.now());
</script>

<div class="grid justify-items-start">
  <section class="mb-[32px]">
    <MarkdownPage {content}/>
  </section>
  <div class="font-bold font-mono text-lg ">
    Last visit: <TimeAgo start={lastVisit}/> ago
  </div>
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
