<script>
  import Title from "../components/Title.svelte";
  import Nav from "../components/Nav.svelte";
  import Menu from "../components/Menu.svelte";

  export let segment;
  console.log(segment);
</script>

<style>
  #grid-wrapper {
    height: 100vh;
    display: grid;
    grid-template-rows: 6vh auto;
    grid-template-columns: 275px auto;
  }

  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<div id="grid-wrapper">
  <Title />
  <Menu {segment} />
  <!--<Nav {segment} />-->

  <main>
    <slot />
  </main>
</div>
