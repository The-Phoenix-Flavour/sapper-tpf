<script>
  import SocialMenu from "../components/SocialMenu.svelte";

  export let siteTitle, SocialLinks;
</script>

<style>
  #title-bar {
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

  #title {
    grid-column-start: 2;
    justify-self: center;
    padding: 0;
    margin: 0;
    text-transform: capitalize;
  }

  #social-menu {
    grid-column-start: 3;
    justify-self: end;
    margin-right: 2rem;
  }
</style>

<div id="title-bar">
  <h1 id="title">{siteTitle}</h1>

  <div id="social-menu">
    <SocialMenu socials={SocialLinks} />
  </div>
</div>
