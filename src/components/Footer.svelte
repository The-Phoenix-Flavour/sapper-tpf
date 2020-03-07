<script>
  export let siteAuthor;

  //FIXME: put footer in bottom of nav instead of directly in layout?
</script>

<style>
  #footer {
    position: absolute;
    bottom: 0;
    background-color: var(--theme-secondary-dark);
    margin: 1.5rem 0 1.5rem 2rem;
  }

  p {
    padding: 0;
    margin: 0;
    color: var(--theme-footer-text-color);
  }

  a {
    color: var(--theme-primary);
  }
</style>

<div id="footer">
  <p>&copy; 2020 {siteAuthor}</p>
  <p>
    Developed by
    <a
      target="_blank"
      rel="noopener noreferrer"
      class="clean-link"
      aria-label="MarceDev Website"
      href="https://www.marce.dev/">
      MarceDev
    </a>
  </p>
</div>
