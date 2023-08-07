<script lang="ts">
  	import { useParams } from "svelte-navigator";

    import MarkdownDisplay from "components/markdown/MarkdownDisplay.svelte";

    const params = useParams();
</script>

<MarkdownDisplay className='mb-40' url={$params.id + '.md'}/>