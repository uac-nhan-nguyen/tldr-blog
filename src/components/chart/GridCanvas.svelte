<script lang="ts">
  import { onMount } from "svelte";

  export let width = 300;
  export let height = 300;
  export let gap = 16;
  export let className = "";
  export let dotColor = '#d4d4d4';

  let canvas: HTMLCanvasElement;
  let context: CanvasRenderingContext2D;

  $: context = canvas?.getContext("2d");

  $: {
    if (context) {
      context.translate(0.5,0.5)
      for (let x = 0; x < width; x += gap) {
        for (let y = 0; y < width; y += gap) {
          context.rect(x, y, 1, 1);
        }
      }
      context.fillStyle = dotColor
      context.fill();
    }
  }
</script>

<canvas bind:this={canvas} class={className} {width} {height} />
