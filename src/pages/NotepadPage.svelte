<script lang="ts">
  import RichTextCube from "../components/RichTextCube.svelte";
  import TimerButton from "../components/TimerButton.svelte";

  const contents: {
    content: string;
    editable?: boolean;
    moreClassName?: string; 
  }[] = [
    {
      content: "<b>TODO:</b> button to add note",
      moreClassName: "font-mono",
    },
    {
      content: "<b>TODO:</b> store note in local storage",
      moreClassName: "font-mono",
    },
  ];

  const className = "border-solid border-1 p-1";
  const editableClass = "border-dashed";

  $: {
  }
</script>

<div class="grid justify-items-start gap-4">
  <TimerButton id="notepad"/>
  <div class="flex items-start gap-2 flex-wrap">
    {#each contents as item}
      <RichTextCube
        className='{className} {item.editable ? editableClass : ''} {item.moreClassName ?? ''}'
        editable={item.editable}
        content={item.content}
        stepWidth={4}
      />
    {/each}
  </div>
</div>
