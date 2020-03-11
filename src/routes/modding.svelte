<script>
  // Imports from packages
  import { setContext, onMount } from 'svelte'
  import { writable } from 'svelte/store'

  // Import Components
  import Mod from "../components/Mod.svelte";
  import PageNav from "../components/PageNav.svelte";

  // Import Data
  import { modList } from "../../content/mod_lists.js";

  let pageList = modList.map((modType, index) => ({
    name: modType.name,
    link: `step-${index + 1}`
  }));

  // States
  const currentStep = writable(0);
  setContext('modSteps', { getCurrentStep: () => currentStep });
</script>

<style lang="sass">
  #step-title
    text-align: center;
    text-transform: capitalize;

  p
</style>

<svelte:head>
  <title>Home | The Phoenix Flavor</title>
</svelte:head>

<section id="mods">
  <!-- This is the title for the curren section's step -->
  <h1 id="step-title">Step {$currentStep + 1} - {modList[$currentStep].category}</h1>

  <!-- This handles displaying all current mods in step or an exception otherwise -->
  {#if modList[$currentStep].hasOwnProperty('mods') && modList[$currentStep].mods.length > 0}
    {#each modList[$currentStep].mods as mod, i}
      <Mod {mod} modIndex={`${$currentStep + 1}.${i + 1}`} />
    {/each}
  {:else}
    <p>
      Oops, it looks like this step is empty. You've most likely encountered an
      error, please inform a team member!
    </p>
  {/if}
</section>

<PageNav {pageList} />