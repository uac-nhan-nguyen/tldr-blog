<script lang="ts">
  import TimerButton from "../components/TimerButton.svelte";
</script>

<div class="grid justify-items-start">
  <TimerButton id="HomePage" />
  <section>
    <h1 class="tracking-wider">Too Long<span class="text-red-600">.</span> Don't Read</h1>

    <p>More expressions. Less words</p>

    <p>Writter in svelte + typescript + markdown</p>
  </section>
  <a href="https://github.com/uac-nhan-nguyen" target="_blank">
    <img
      alt="github badge"
      height="32"
      src="https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=181717&logo=GitHub&logoColor=FFFFFF&label="
    />
  </a>

</div>

<style>
  /* h1 + p {
    margin: 0;
  } */
</style>
