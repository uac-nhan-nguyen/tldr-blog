<script lang="ts">
    import { HYPERLINK_WRAP_COLOR, TRANSFORM_URL } from "../components/RichTextCube";
  import RichTextCube from "../components/RichTextCube.svelte";
  import TimerButton from "../components/TimerButton.svelte";

  let content =
    'This box is <b class="text-red-600">bounded two ways</b>. Changes in these two boxes results in <b>HTML and Text</b> updated';
  let text;

  const SHORTCUT_WRAP = (text: string) =>
    `<code class="border-1 border-solid rounded text-[12px] px-0.5 bg-red-100">${text}</code>`;

  const contents: {
    content: string;
    editable?: boolean;
    moreClassName?: string;
  }[] = [
    {
      content:
        "This <b>rich text editor</b> resizes itself to be as close to a <b>&#9706; square</b> as possible",
    },
    {
      content: `It is editable. ${SHORTCUT_WRAP('CMD+Z')} to undo.`,
      editable: true,
    },
    {
      content: `With clickable <a onmousedown="window.open(this.href,this.target)" class="text-blue-500 cursor-pointer font-bold" target="_blank" href="https://github.com/uac-nhan-nguyen/tldr-blog">link</a> on chrome. Or use ${SHORTCUT_WRAP('F1')} to open in edit mode`,
      editable: true,
    },
    {
      content: 'Paste default to text only. Paste from note will keep html styles.',
      editable: true,
    },
    {
      content: 'Paste link into inline tag. <br><br>Try copy the below link and paste it <br><b>https://github.com/uac-nhan-nguyen/tldr-blog</b>',
      editable: true,
    },
    {
      content: `Supported tags: <br><br>${[
        'Jira: ' + TRANSFORM_URL('https://uac-cloud.atlassian.net/browse/TICKET-650'),
        'Github: ' + TRANSFORM_URL('https://github.com/uac-nhan-nguyen/tldr-blog'),
        'Github Pull Request: ' + TRANSFORM_URL('https://github.com/uac-nhan-nguyen/tldr-blog/pull/372'),
      ].join('<br>')}`,
      editable: true,
    },
  ];

  const className = "border-solid border-2 p-1";
  const editableClass = "border-dashed";

  $: {
  }
</script>

<div class="grid justify-items-start gap-4">
  <TimerButton id="text-cube" />
  <div class="flex items-start gap-2 flex-wrap">
    {#each contents as item}
      <RichTextCube
        className="{className} {item.editable
          ? editableClass
          : ''} {item.moreClassName ?? ''}"
        editable={item.editable}
        content={item.content}
        stepWidth={4}
      />
    {/each}
  </div>

  <div class="flex flex-wrap gap-2">
    <RichTextCube
      className="{className} {editableClass}"
      editable={true}
      bind:textOutput={text}
      bind:content
      stepWidth={4}
    />

    <RichTextCube
      className="{className} {editableClass}"
      editable={true}
      bind:textOutput={text}
      bind:content
      stepWidth={4}
    />

    <RichTextCube {className} editable={false} content={text} stepWidth={4} />
  </div>
</div>
