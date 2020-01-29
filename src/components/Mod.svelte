<script>
  export let modIndex, mod, modInstructions;
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

  {#each modInstructions as instructionSet}
    <!-- Adds any instruction categories associated with the mod -->
    {#if instructionSet in mod}
      <h3 id="mod-title">{instructionSet} instructions</h3>
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
