<script lang="ts">
  import {type ChartData} from "components/chart/Chart.d.ts";

  export let data: ChartData;

  const className = 'w-10 h-10 border-solid border-1';

  const snap = (v: number) => v - v % 16;
</script>

<div>
  <div class="relative">
    {#each data.nodes as node}
      {@const x = snap(node.x + (node.offsetX ?? 0) - (node.startX ?? 0))}
      {@const y = snap(node.y + (node.offsetY ?? 0) - (node.startY ?? 0))}
      <div class="absolute {className} opacity-0 cursor-grab"
           draggable="true"
           on:dragstart={(e) => {
             node.dragging = true;
             node.startX = e.offsetX;
             node.startY = e.offsetY;
              node.offsetX = e.offsetX;
              node.offsetY = e.offsetY;
           }}
           on:drag={(e) => {
             if (e.screenX !== 0 && e.screenY !== 0){
              node.offsetX = e.offsetX;
              node.offsetY = e.offsetY;
             }
           }}
           on:dragend={(e) => {
             node.x += node.offsetX - node.startX
             node.y += node.offsetY - node.startY
             node.dragging = undefined
             node.startX = undefined;
             node.startY = undefined;
             node.offsetX = undefined;
             node.offsetY = undefined;
           }}
           style="transform: translate({snap(node.x)}px, {snap(node.y)}px);"></div>
      <div class="absolute {className} opacity-10 pointer-events-none"
           style="transform: translate({snap(node.x)}px, {snap(node.y)}px);"></div>
      <div class="absolute w-10 h-10 border-solid border-1 pointer-events-none"
           style="transform: translate({x}px, {y}px);"></div>
    {/each}
  </div>
</div>
