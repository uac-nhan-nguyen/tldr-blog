<script lang="ts">
  import logo from './assets/logo.svg' 
  import Counter from './lib/Counter.svelte'
</script>

<main class="items-center justify-items-center grid w-full gap-4 mt-[20vh]">
  <div>
    <a href="https://github.com/uac-nhan-nguyen/svelte-tailwind-kit" target="_blank" rel="noreferrer"> 
      <img src={logo} class="h-40" alt="N Logo" />
    </a>
  </div>
  <h1 class="text-3xl">
    <a href='https://svelte.dev/docs' target="_blank">Svelte</a>
    +
    <a href='https://tailwindcss.com/docs/guides/sveltekit' target="_blank">Tailwind</a>
  </h1>

  <div class="card">
    <Counter className="border-2 border-black rounded-lg px-4 py-1 hover:bg-slate-200 duration-100" />
  </div>
</main>
