<script>
  import Title from "../components/Title.svelte";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  import { siteTitle, siteAuthor, SocialLinks, siteLogo } from "settings";

  export let segment;
</script>

<style lang="sass">
  main
    display: flex
    justify-content: center
    margin-right: 275px
    margin-top: 3rem
    background-color: var(--theme-secondary)
    //position: relative
    //max-width: 56em
    //padding: 2em
    //box-sizing: border-box

  #grid-wrapper
    height: 100vh
    display: grid
    grid-template-rows: 6vh auto
    grid-template-columns: 275px auto
</style>

<div id="grid-wrapper">
  <Title {siteTitle} {SocialLinks} />
  <Nav {segment} {siteLogo} />

  <main>
    <div>
      <slot />
    </div>
  </main>
</div>
<Footer {siteAuthor} />
