<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`index.json`)
      .then(r => r.json())
      .then(paths => {
        return { paths };
      });
  }
</script>

<script>
  export let paths;

  import { dynamicPaths } from "../store.js";

  dynamicPaths.set(paths);
</script>

<style lang="sass">
  h1,
  p
    text-align: center
    margin: 0 auto

  h1
    font-size: 2.8em
    text-transform: uppercase
    font-weight: 700
    margin: 0 0 0.5em 0

  p
    margin: 1em auto

  @media (min-width: 480px)
    h1
      font-size: 4em
</style>

<svelte:head>
  <title>TPF | SKSE</title>
</svelte:head>

<h1>Landing Page</h1>
