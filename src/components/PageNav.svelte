<script>
  // Imports from packages
  import { getContext } from 'svelte'
  import Icon from "fa-svelte";
  import {
    faCaretDown,
    faAngleLeft,
    faAngleRight
  } from "@fortawesome/free-solid-svg-icons";
  import classNames from "classnames";

  // Import Functions
  import { capitalize } from "../util/misc.js";

  // Helper functions
  // Bound Helper Functions
  function nextStep() {
    // Moves to next Step
    if (!isEnd) currentStep.update(n => n + 1);
  }

  function prevStep() {
    // Moves to previous Step
    if (!isBeginning) currentStep.update(n => n - 1);
  }

  // Context
  const { getCurrentStep } = getContext('modSteps');
  let currentStep = getCurrentStep();

  // States
  $: isBeginning = $currentStep <= 0;
  $: isEnd = $currentStep >= pageList.length - 1;

  // Props
  export let pageList;
</script>

<style lang="sass">
  #page-nav
    margin-top: 4.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;

  // Workround for browsers that don't have the gap property
  // TODO: make this a rollback only if browser doesn't suppoer gap
  #page-nav > * + *
    margin-left: 1.5rem;

  .hide-button
    visibility: hidden;

  .select-wrapper
    display: flex;
    align-items: center;
    position: relative;

  .select-fix
    padding-left: 5px;
    padding-right: 35px;

  //FIXME: cleaner way to do this? put icon in div/span?
  div :global(.select-icon)
    position: absolute;
    right: 8px;
</style>

<div id="page-nav">
  <button
    class={classNames('clean-button item-block button-block-icon', {
      'hide-button': isBeginning
    })}
    on:click|preventDefault={prevStep}>
    <Icon class="fix-icon" icon={faAngleLeft} />
  </button>

  <div class="select-wrapper select">
    <select class="clean-select item-block select-fix" bind:value={$currentStep}>
      {#each pageList as page, i}
        <!-- FIXME: svg arrow isn't part of clickable element-->
        <option value={i}>{i + 1 + ' - ' + capitalize(page.name)}</option>
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
