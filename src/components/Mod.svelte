<script>
  export let mod, modIndex;
</script>

<style>
  .mod {
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    background-color: #f6f6f6;
    box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px,
      rgba(71, 63, 79, 0.08) 0px 2px 4px;
  }

  #mod-title {
    text-transform: capitalize;
  }
</style>

<div class="mod">
  <h2>
    {modIndex}
    <a target="_blank" rel="noopener noreferrer" class="link" href={mod.url}>
      {mod.name}
    </a>
  </h2>

  {#each Object.entries(mod.instructions) as instructionSet}
    <!-- Adds any instruction categories associated with the mod -->
    <h3 id="mod-title">{instructionSet[0]} instructions</h3>

    <ul>
      {#if Array.isArray(instructionSet[1])}
        {#each instructionSet[1] as instruction}
          <li>{instruction}</li>
        {/each}
      {:else}
        <li>{instructionSet[1]}</li>
      {/if}
    </ul>
  {/each}

</div>
