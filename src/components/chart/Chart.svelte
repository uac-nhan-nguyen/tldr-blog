<script lang="ts">
  import MarkdownDisplay from "components/markdown/MarkdownDisplay.svelte";
  import ArrowCanvas from "./ArrowCanvas.svelte";
  import type { ChartData } from "./Chart";
  import ComponentsCanvas from "./ComponentsCanvas.svelte";
  import GridCanvas from "./GridCanvas.svelte";

  export let gap = 8;

  export let data: ChartData;

  let componentsCanvasW = 600;
  let componentsCanvasH = 400;

  const className = "w-10 h-10 border-solid border-1";

  const snap = (v: number) => v - (v % gap);
</script>

<div>
  <MarkdownDisplay content="## Components" />
  <div class="relative" style="height: {componentsCanvasH}px">
    <GridCanvas
      gap={10}
      dotColor="black"
      width={componentsCanvasW}
      height={componentsCanvasH}
      className="absolute top-0 left-0 inset-border-2"
    />
    <ComponentsCanvas
      width={componentsCanvasW}
      height={componentsCanvasH}
      className="absolute top-0 left-0"
    />
  </div>

  <MarkdownDisplay content="## Chart" />
  <div class="relative">
    <GridCanvas {gap} className="absolute top-0 left-0" />
    <ArrowCanvas className="absolute top-0 left-0" />
    {#each data.nodes as node}
      {@const x = snap(node.x + (node.offsetX ?? 0) - (node.startX ?? 0))}
      {@const y = snap(node.y + (node.offsetY ?? 0) - (node.startY ?? 0))}
      <div
        class="absolute {className} opacity-0 cursor-grab"
        draggable="true"
        on:dragstart={(e) => {
          node.dragging = true;
          node.startX = e.offsetX;
          node.startY = e.offsetY;
          node.offsetX = e.offsetX;
          node.offsetY = e.offsetY;
        }}
        on:drag={(e) => {
          if (e.screenX !== 0 && e.screenY !== 0) {
            node.offsetX = e.offsetX;
            node.offsetY = e.offsetY;
          }
        }}
        on:dragend={(e) => {
          node.x += node.offsetX - node.startX;
          node.y += node.offsetY - node.startY;
          node.dragging = undefined;
          node.startX = undefined;
          node.startY = undefined;
          node.offsetX = undefined;
          node.offsetY = undefined;
        }}
        style="transform: translate({snap(node.x)}px, {snap(node.y)}px);"
      />
      <div
        class="absolute {className} opacity-10 pointer-events-none"
        style="transform: translate({snap(node.x)}px, {snap(node.y)}px);"
      />
      <div
        class="absolute w-10 h-10 border-solid border-1 pointer-events-none"
        style="transform: translate({x}px, {y}px);"
      />
    {/each}
  </div>
</div>
