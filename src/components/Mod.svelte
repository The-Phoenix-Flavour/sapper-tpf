<script>
  export let mod, modInstructions;
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
</style>

<div class="mod">
  <h2>{mod.name}</h2>

  {#each modInstructions as instructionSet}
    <!-- Adds any instruction categories associated with the mod -->
    {#if instructionSet in mod}
      <h3>
        {instructionSet.charAt(0).toUpperCase() + instructionSet.substr(1)}
        instructions
      </h3>
      <ul>
        {#if Array.isArray(mod[instructionSet])}
          {#each mod[instructionSet] as instruction}
            <li>{instruction}</li>
          {/each}
        {:else}
          <li>{mod[instructionSet]}</li>
        {/if}
      </ul>
    {/if}
  {/each}

</div>
