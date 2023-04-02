<script lang="ts">
  // Start: 25-03-2023 12:48

  import dayjs from "dayjs";
  import utc from "dayjs/plugin/utc";
  import { animateSteps } from "../utils/animate-steps";
  import { onMount, onDestroy } from "svelte";

  export let id: string;
  export let className: string = "";
  export let countAlways: boolean = false;

  const storageId = `timer-${id}`;
  const storageIdStopped = `timer-${id}-stopped`;
  let hovering = false;

  dayjs.extend(utc);
  const ONE_HOUR = 1000 * 60 * 60;
  const ONE_DAY = 1000 * 60 * 60 * 24;

  let start: number = parseInt(localStorage.getItem(storageId));
  if (isNaN(start)) {
    start = Date.now();
    localStorage.setItem(storageId, start.toString());
  } else {
    const stopped = parseInt(localStorage.getItem(storageIdStopped));
    if (!isNaN(stopped) && !countAlways) {
      const diffStopped = Date.now() - stopped;
      start = start + diffStopped;
      localStorage.setItem(storageId, start.toString());
      localStorage.removeItem(storageIdStopped);
    }
  }

  let diff = Date.now() - start;
  let format: string = "mm:ss";
  let smaller = true;
  let now = Date.now();

  let intervalId = -1;

  onMount(() => {
    intervalId = window.setInterval(() => {
      now = Date.now();
    }, 100);
  })

  $: {
    diff = now - start;
    smaller = diff < ONE_HOUR;
    format = diff < ONE_HOUR ? "mm:ss" : diff < ONE_DAY ? "HH:mm:ss" : "d[d] HH:mm";
  }

  onDestroy(() => {
    localStorage.setItem(storageIdStopped, Date.now().toString());
    clearInterval(intervalId);
  });

  const restart = () => {
    const goal = Date.now();
    hovering = false;
    localStorage.setItem(storageId, goal.toString());
    animateSteps(100, ({ frame }) => {
      start = start + Math.ceil(((goal - start) * frame) / 100);
    });
  };
</script>

<button
  class="h-[32px] px-[12px] rounded-none bg-red-600 text-white border-none  cursor-pointer font-bold tracking-widest {className}"
  on:mouseenter={() => (hovering = true)}
  on:mouseleave={() => (hovering = false)}
  on:click={restart}
>
  <div class="grid">
    <div
      class="col-start-1 row-start-1 duration-100 {hovering
        ? 'opacity-0'
        : 'opacity-100'}"
    >
      {dayjs.utc(diff).format(format)}
    </div>
    <div
      class="col-start-1 row-start-1 duration-100 {!hovering
        ? 'opacity-0'
        : 'opacity-100'} {smaller ? 'tracking-tight' : ''}"
    >
      reset
    </div>
  </div>
</button>
