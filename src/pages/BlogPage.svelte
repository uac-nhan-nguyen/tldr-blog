<script lang="ts">
  	import { useParams } from "svelte-navigator";

    import MarkdownPage from "../components/MarkdownDisplay.svelte";

    const params = useParams();
</script>

<MarkdownPage url={$params.id + '.md'}/>