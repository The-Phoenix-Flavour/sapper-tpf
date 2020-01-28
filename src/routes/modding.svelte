<script>
  // Import Components
  import Mod from "../components/Mod.svelte";

  // Import Data
  import { modCategories, modInstructions } from "../../content/mod_config.js";
  import { modList } from "../../content/mod_data.js";

  // States
  let currentCategory;
  $: currentIndex = modCategories.indexOf(currentCategory);
  $: filteredModList = modList.filter(mod => mod.category === currentCategory);

  // Bound Helper Functions
  function nextStep() {
    // Passes to next category
    if (currentIndex < modCategories.length - 1)
      currentCategory = modCategories[currentIndex + 1];
  }

  function prevStep() {
    // Passes to previous category
    if (currentIndex > 0) currentCategory = modCategories[currentIndex - 1];
  }
</script>

<style>
  #mods {
    margin-top: 3rem;
  }

  #step-title {
    text-align: center;
  }

  #step-controls {
    margin-top: 4.5rem;
    text-align: center;
  }

  .item-block {
    margin-right: 1rem;
    padding: 1rem;
    border-radius: 3px;
    border: none;
    box-shadow: rgba(46, 41, 51, 0.08) 0px 2px 4px,
      rgba(71, 63, 79, 0.08) 0px 2px 4px;
    background-color: #f5f5f5;
  }
</style>

<svelte:head>
  <title>Home | The Phoenix Flavor</title>
</svelte:head>

<section id="mods">
  <!-- This is the title for the curren section's step -->
  <h1 id="step-title">Step {currentIndex + 1} - {currentCategory}</h1>

  <!-- This handles displaying all current mods in step or an exception otherwise -->
  {#if filteredModList.length <= 0}
    <p>
      Oops, it looks like this step is empty. You've most likely found an error,
      please inform a team member!
    </p>
  {:else}
    {#each filteredModList as mod}
      <Mod {mod} {modInstructions} />
    {/each}
  {/if}

  <!-- This is the selection menu for navigating the steps -->
  <div id="step-controls">
    <button class="item-block" on:click|preventDefault={prevStep}>back</button>

    <select class="item-block" bind:value={currentCategory}>
      {#each modCategories as category, i}
        <option value={category}>{i + 1 + ' - ' + category}</option>
      {/each}
    </select>

    <button class="item-block" on:click|preventDefault={nextStep}>
      forward
    </button>
  </div>
</section>
