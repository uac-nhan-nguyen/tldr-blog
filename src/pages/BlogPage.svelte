<script lang="ts">
  	import { useParams } from "svelte-navigator";

    import MarkdownPage from "./MarkdownPage.svelte";

    const params = useParams();

    $: console.log($params)

</script>

<MarkdownPage url={$params.id + '.md'}/>