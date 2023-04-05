<script lang="ts">
  import MarkdownDisplay from "components/markdown/MarkdownDisplay.svelte";
  import PrismWrapper from "components/PrismWrapper.svelte";
  import TimerButton from "components/TimerButton.svelte";
  import { useLocalStorage } from "utils/LocalStorage";

  let text = useLocalStorage<string>("RegexPage-text", "chi.nhan@m1studio.co");
  let regex = useLocalStorage<string>("RegexPage-regex", "\\S+");

  let match, matchAll;
  let error;
  $: {
    error = undefined;
    try {
      match = $text.match(new RegExp($regex));
      matchAll = [...$text.matchAll(new RegExp($regex, 'g'))];

    } catch (e) {
      error = e;
      console.error(e);
    }
  }

  $: {
    if ($regex.includes("\n")) {
      $regex = $regex.replaceAll("\n", "");
    }
  }

</script>

<MarkdownDisplay className="mb-4" url='/blogs/tools-regex.md' />
<TimerButton className="mb-4" id="regex-page" />

<div class="grid justify-items-start bg-red-100 w-min p-4 mb-4">
  <label for="regex" class="font-bold">Regex</label>
  <textarea
    id="regex"
    class="border-0 border-b-1 py-1 bg-inherit outline-none w-[200px] mb-4 font-mono"
    bind:value={$regex}
  />
  <label for="text" class="font-bold">Text</label>
  <textarea
    id="text"
    class="border-0 border-b-1 py-1 bg-inherit outline-none w-[200px]"
    bind:value={$text}
  />
</div>

{#if error}
  <PrismWrapper
    classLabel="bg-red-600 text-white"
    label="ERROR"
    source={error.toString()}
  />
{:else}
  <PrismWrapper
  className='mb-4'
    label="RegExp.match"
    lang="json"
    source={JSON.stringify(match, null, 2)}
  />
  <PrismWrapper
    label="RegExp.matchAll"
    lang="json"
    source={JSON.stringify(matchAll, null, 2)}
  />
{/if}
