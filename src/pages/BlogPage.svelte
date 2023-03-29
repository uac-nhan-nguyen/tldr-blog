<script lang="ts">
  	import { useParams } from "svelte-navigator";

    import MarkdownPage from "./MarkdownPage.svelte";

    const params = useParams();
</script>

<MarkdownPage url={$params.id + '.md'}/>