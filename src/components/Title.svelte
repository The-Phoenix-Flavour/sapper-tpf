<script>
  import SocialMenu from "../components/SocialMenu.svelte";
  import { title } from "../../site_config.js";
  import { SocialLinks } from "../../site_config.js";
</script>

<style>
  #site-title {
    grid-column: 1/3;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #557287;
    color: #fff;
  }

  h1 {
    grid-column-start: 2;
    justify-self: center;
    padding: 0;
    margin: 0;
  }

  #social-menu {
    grid-column-start: 3;
    justify-self: end;
    margin-right: 2rem;
  }
</style>

<div id="site-title">
  <h1>{title}</h1>

  <div id="social-menu">
    <SocialMenu socials={SocialLinks} />
  </div>
</div>
