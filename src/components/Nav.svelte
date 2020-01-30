<script>
  export let segment;
  import { navStructure } from "../../site_config.js";
  import Routes from "../routes";
</script>

<style>
  #side-menu {
    background-color: #f9f9f9;
    text-align: center;
  }

  ul {
    margin-top: 3rem;
    border-top: 1px solid grey;
  }

  li {
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid grey;
  }
</style>

<div id="side-menu">
  <img src="img/logo.svg" alt="Docs" class="logo" />

  <!-- This is where the navlinks are generated -->
  <ul class="clean-list">
    <!--
      <li>
        <a class:selected={segment === undefined} href=".">home</a>
      </li>
    -->
    {#each navStructure as navItem}
      <li>
        <a
          class="clean-link"
          class:selected={segment === navItem.pathname}
          href={navItem.pathname}>
          {navItem.label}
        </a>
      </li>
    {/each}
  </ul>
</div>
