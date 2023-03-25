<script lang="ts">
  // Start: 25-03-2023 12:48

  import dayjs from "dayjs";
  import utc from 'dayjs/plugin/utc';

  dayjs.extend(utc)
  // const ONE_MINUTE = 1000 * 60;
  const ONE_HOUR = 1000 * 60 * 60;


  let state: "Stopped" | "Running" = "Stopped";
  let start: number = Date.now();
  let diff = 0
  let format: string = 'mm:ss';

  const restart = () => {
    start = Date.now();
  }

  setInterval(() => {
    diff = Date.now() - start;
    format = diff < ONE_HOUR ? 'mm:ss' : 'HH:mm:ss';
  }, 100)
</script>

<div>
  <h1>Timer</h1>
  <div>{dayjs.utc(diff).format(format)}</div>
  <button on:click={restart}>Restart</button>
</div>
