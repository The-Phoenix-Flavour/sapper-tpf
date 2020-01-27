<script>
  import ModGroup from "../components/ModGroup.svelte";
  export let segment;
</script>

<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  #mods {
    margin-top: 3rem;
  }
</style>

<svelte:head>
  <title>Home | The Phoenix Flavor</title>
</svelte:head>

<section id="mods">
  <ModGroup />
</section>
