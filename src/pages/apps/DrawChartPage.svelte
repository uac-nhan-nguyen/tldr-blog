<script lang="ts">
  import Chart from "components/chart/Chart.svelte";
  import type {ChartData} from "components/chart/Chart";
  import MarkdownDisplay from "components/markdown/MarkdownDisplay.svelte";

  let data: ChartData = {
    nodes: [{
      content: 'Node 1',
      x: 0,
      y: 0,
    }, {
      content: 'Node 2',
      x: 80,
      y: 0,
    },],
    links: [],
  }
</script>

<div>
  <MarkdownDisplay content="# WIP"/>
  <Chart bind:data/>
</div>