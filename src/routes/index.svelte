<script context="module">
  // TODO: remove posts code if unneded later on
  /*export async function preload({ params, query }) {
    return this.fetch(`index.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }*/
</script>

<script>
  //export let posts;
</script>

<style>
  h1 {
    text-align: center;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Introduction</h1>

<!--<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
<!--<li>
      <a rel="prefetch" href={post.slug}>{post.title}</a>
    </li>
  {/each}
</ul>-->
