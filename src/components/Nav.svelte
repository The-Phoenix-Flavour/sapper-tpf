<script>
  import { isObject } from "../util/misc.js";
  import { dynamicPaths } from "../store.js";

  export let segment, siteLogo;
</script>

<style>
  #side-menu {
    background-color: var(--theme-secondary-dark);
    text-align: center;
  }

  ul {
    border-top: 1px solid var(--theme-nav-divider-color);
  }

  li {
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid var(--theme-nav-divider-color);
  }

  a {
    text-decoration: none;
    padding: 0 0.5em;
    display: block;
    text-transform: capitalize;
    color: var(--theme-nav-link-color);
  }

  img {
    margin-top: 1rem;
    margin-bottom: 1rem;
    max-height: 80px;
    width: auto;
  }
</style>

<div id="side-menu">
  {#if siteLogo}
    <a class="clean-link" href="." aria-label="Return to home page">
      <img src={siteLogo} alt="Home Icon" class="logo" />
    </a>
  {/if}
  <!-- This is where the navlinks are generated -->
  <ul class="clean-list">
    {#if !siteLogo}
      <li>
        <a class:selected={segment === undefined} href=".">home</a>
      </li>
    {/if}

    <li>
      <a class:selected={segment === undefined} href="modding">modding</a>
    </li>

    <!-- Generates dynamic paths for Markdown files -->
    {#each $dynamicPaths as path}
      <li>
        {#if isObject(path)}
          <a
            class="clean-link"
            class:selected={segment == path.rootName}
            href={path.path}>
            {path.rootName}
          </a>
        {:else}
          <a class:selected={segment == path} href={path}>{path}</a>
        {/if}
      </li>
    {/each}
  </ul>
</div>
