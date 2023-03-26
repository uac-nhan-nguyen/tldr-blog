<script lang="ts">
  // Start: 25-03-2023 12:48

  import dayjs from "dayjs";
  import utc from "dayjs/plugin/utc";
  import { animateSteps } from "../utils/animate-steps";

  dayjs.extend(utc);
  // const ONE_MINUTE = 1000 * 60;
  const ONE_HOUR = 1000 * 60 * 60;

  let start: number = parseInt(localStorage.getItem("timerStart"));
  if (isNaN(start)) {
    start = Date.now();
    localStorage.setItem("timerStart", start.toString());
  }

  let state: "Stopped" | "Running" = "Stopped";
  let diff = Date.now() - start;
  let format: string = "mm:ss";
  let now = Date.now()

  $:{
    diff = now - start;
    format = diff < ONE_HOUR ? "mm:ss" : "HH:mm:ss";
  }

  const restart = () => {
    const goal = Date.now();
    localStorage.setItem("timerStart", goal.toString());
    animateSteps(100, ({ frame }) => {
      start = start + Math.ceil(((goal - start) * frame) / 100);
    });
  };

  setInterval(() => {
    now = Date.now()
  }, 100);
</script>

<div class="h-screen grid items-center">
  <div class="grid flex-1 items-center pb-[40vh]">
    <!-- <h1 class="text-slate-600">Timer</h1> -->
    <div class="grid justify-center justify-items-center gap-4">
      <div
        class="font-bold font-mono text-5xl border-2 border-solid border-slate-100 px-4 py-2 rounded-md"
      >
        {dayjs.utc(diff).format(format)}
      </div>
      <button
        class=" rounded-none bg-red-600 text-white border-none px-4 py-2 cursor-pointer hover:bg-red-400 duration-100 uppercase font-bold tracking-widest"
        on:click={restart}>Restart</button
      >
    </div>
  </div>
</div>
