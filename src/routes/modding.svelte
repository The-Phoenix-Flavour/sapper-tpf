<script>
  // Imports from packages
  import Icon from "fa-svelte";
  import {
    faCaretDown,
    faAngleLeft,
    faAngleRight
  } from "@fortawesome/free-solid-svg-icons";
  import classNames from "classnames";

  // Import Components
  import Mod from "../components/Mod.svelte";

  // Import Data
  import { modInstructions } from "../../content/mod_config.js";
  import { modList } from "../../content/mod_data.js";

  // States
  let currentStep = 0;
  $: isBeginning = currentStep <= 0;
  $: isEnd = currentStep >= modList.length - 1;

  // Bound Helper Functions
  function nextStep() {
    // Moves to next Step
    if (!isEnd) currentStep++;
  }

  function prevStep() {
    // Moves to previous Step
    if (!isBeginning) currentStep--;
  }
</script>

<style>
  #step-title {
    text-align: center;
    text-transform: capitalize;
  }

  #step-controls {
    margin-top: 4.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  /* Workround for browsers that don't have the gap property */
  /* TODO: make this a rollback only if browser doesn't suppoer gap */
  #step-controls > * + * {
    margin-left: 1.5rem;
  }

  .hide-button {
    visibility: hidden;
  }

  .select-wrapper {
    display: flex;
    align-items: center;
    position: relative;
  }

  .select-fix {
    padding-left: 5px;
    padding-right: 35px;
  }

  select {
    text-transform: capitalize;
  }

  /* FIXME: cleaner way to do this? put icon in div/span? */
  div :global(.select-icon) {
    position: absolute;
    right: 8px;
  }
</style>

<svelte:head>
  <title>Home | The Phoenix Flavor</title>
</svelte:head>

<section id="mods">
  <!-- This is the title for the curren section's step -->
  <h1 id="step-title">Step {currentStep + 1} - {modList[currentStep].name}</h1>

  <!-- This handles displaying all current mods in step or an exception otherwise -->
  {#if modList[currentStep].hasOwnProperty('mods') && modList[currentStep].mods.length > 0}
    {#each modList[currentStep].mods as mod, i}
      <Mod modIndex={`${currentStep + 1}.${i + 1}`} {mod} {modInstructions} />
    {/each}
  {:else}
    <p>
      Oops, it looks like this step is empty. You've most likely found an error,
      please inform a team member!
    </p>
  {/if}

  <!-- This is the selection menu for navigating the steps -->
  <div id="step-controls">
    <button
      class={classNames('clean-button item-block button-block-icon', {
        'hide-button': isBeginning
      })}
      on:click|preventDefault={prevStep}>
      <Icon class="fix-icon" icon={faAngleLeft} />
    </button>

    <div class="select-wrapper select">
      <select
        class="clean-select item-block select-fix"
        bind:value={currentStep}>
        {#each modList as step, i}
          <!-- TODO: css is used to capitalize active element but values in drop-down list aren't fixed -->
          <option value={i}>{i + 1 + ' - ' + step.name}</option>
        {/each}
      </select>
      <Icon class="select-icon" icon={faCaretDown} />
    </div>

    <button
      class={classNames('clean-button item-block button-block-icon', {
        'hide-button': isEnd
      })}
      on:click|preventDefault={nextStep}>
      <Icon class="fix-icon" icon={faAngleRight} />
    </button>
  </div>
</section>
