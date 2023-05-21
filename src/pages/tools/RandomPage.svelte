<script lang="ts">
  import MarkdownDisplay from "components/markdown/MarkdownDisplay.svelte";
  import { onMount } from "svelte";

  let KSUID, randomUUID;
  let ksuid, uuid: string;

  onMount(async () => {
    KSUID = //@ts-ignore
    (await import("https://cdn.jsdelivr.net/npm/xksuid@0.0.3/src/index.js"))
      .generate;

    ksuid = KSUID();

    //@ts-ignore
    const _uuid = await import("https://jspm.dev/uuid");
    uuid = _uuid.v4();
  });

  $: content = `
# Random values

\`\`\`
Ksuid     ${ksuid} 
UUIDV4    ${uuid}
\`\`\`
`;
</script>

<MarkdownDisplay
  className="mb-4"
  content={content}
/>
