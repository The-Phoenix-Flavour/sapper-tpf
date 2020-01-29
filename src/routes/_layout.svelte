<script>
  import Title from "../components/Title.svelte";
  import Nav from "../components/Nav.svelte";

  // FIXME: integrate this CSS file properly
  import "../../static/common.css";

  export let segment;
</script>

<style>
  #grid-wrapper {
    height: 100vh;
    display: grid;
    grid-template-rows: 6vh auto;
    grid-template-columns: 275px auto;
  }

  main {
    display: flex;
    justify-content: center;
    margin-right: 275px;
    margin-top: 3rem;
    /*position: relative;*/
    /*max-width: 56em;*/
    background-color: white;
    /*padding: 2em;*/
    /*box-sizing: border-box;*/
  }
</style>

<div id="grid-wrapper">
  <Title />
  <Nav {segment} />

  <main>
    <slot />
  </main>
</div>
