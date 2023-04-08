<script lang="ts">
  import { onMount } from "svelte";
  import { drawArrow, drawArrowLine, drawCurve, drawPoint, mm} from "./canvas-utils";

  export let width = 300;
  export let height = 300;
  export let density = 2;
  export let className = "";


  let canvas: HTMLCanvasElement;
  let context: CanvasRenderingContext2D;

  let x = 0;
  let y = 0;
  let w,h;
  const d=density

  $: context = canvas?.getContext("2d");
  $: w=width*density
  $: h=height*density


  $: {
    if (context) {
      const mx = x/d-d;
      const my = y/d-d;
      context.clearRect(0, 0, w, h);

      // move context
      context.scale(density,density);
      context.translate(1,1)

      context.fillStyle = "red"

      // draw 0
      context.fillRect(0,0,10,10)

      // draw mouse
      drawArrow(context, mx,my, 'Up', 10, 10);
      drawArrow(context, mx,my, 'Left', 10, 10);

      /// draw arrow
      context.translate(20,20);
      context.fillRect(0,0,10,10)
      context.fillStyle = "black"
      drawArrow(context, 0,5, 'Left', 10, 10);
      drawArrow(context, 5,0, 'Up', 10, 10);
      drawArrow(context, 10,5, 'Right', 10, 10);
      drawArrow(context, 5,10, 'Down', 10, 10);
      context.translate(-20,-20);

      /// draw arrow line LHS
      const r2 = 50
      context.translate(60,r2);
      drawPoint(context, 0, 0, 10)
      drawArrowLine(context, 0, 0, mm(mx-60, -40,40), mm(my-r2, -40,40), {radius:0.3, side: 'LHS'});
      context.translate(-60,-r2);

      /// draw arrow line RHS
      context.translate(120,r2);
      drawPoint(context, 0, 0, 10)
      drawArrowLine(context, 0, 0, mm(mx-120, -40,40), mm(my-r2, -40,40), {radius:0.3, side: 'RHS'});
      context.translate(-120,-r2);

      // reset context
      context.translate(-1,-1)
      context.scale(1/d,1/d);
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
