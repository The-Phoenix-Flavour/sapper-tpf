<script>
  import Title from "../components/Title.svelte";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  import { siteTitle, siteAuthor, SocialLinks, siteLogo } from "settings";

  // FIXME: integrate this CSS file properly
  import "../../static/common.css";

  export let segment;
</script>

<style>
  #grid-wrapper {
    height: 100vh;
    display: grid;
    grid-template-rows: 6vh auto;
    grid-template-columns: 275px auto;
  }

  main {
    display: flex;
    justify-content: center;
    margin-right: 275px;
    margin-top: 3rem;
    /*position: relative;*/
    /*max-width: 56em;*/
    background-color: white;
    /*padding: 2em;*/
    /*box-sizing: border-box;*/
  }
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
