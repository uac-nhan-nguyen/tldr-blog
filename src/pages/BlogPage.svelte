<script lang="ts">
  	import { useParams } from "svelte-navigator";

    import MarkdownPage from "components/markdown/MarkdownDisplay.svelte";

    const params = useParams();
</script>

<MarkdownPage className='mb-40' url={$params.id + '.md'}/>