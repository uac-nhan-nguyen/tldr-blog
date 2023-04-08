<script lang="ts">
  import { onMount } from "svelte";
  import { drawArrow, drawArrowLine, drawCurve} from "./canvas-utils";

  export let width = 300;
  export let height = 300;
  export let density = 2;
  export let className = "";


  let canvas: HTMLCanvasElement;
  let context: CanvasRenderingContext2D;

  let x = 0;
  let y = 0;
  let w,h;

  $: context = canvas?.getContext("2d");
  $: w=width*density
  $: h=height*density

  $: {
    if (context) {
      context.clearRect(0, 0, w, h);
      context.lineWidth = density;
      // drawArrowLine(context, w / 2, h / 2, x, y, {radius:0.3});
      drawArrowLine(context, w / 2, h / 2, x, y, {radius:0.3, side: 'LHS'});
    }
  }
</script>

<canvas
  bind:this={canvas}
  class={className}
  style="width: {width}px; height: {height}px"
  width={w}
  height={h}
  on:mousemove={(e) => {
    x = e.offsetX * density;
    y = e.offsetY * density;
  }}
/>
