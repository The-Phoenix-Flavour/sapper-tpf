<script>
  const menuItems = [
    {
      label: "Home",
      path: "."
    },
    {
      label: "Modding",
      path: "/modding"
    },
    {
      label: "Test",
      path: "test"
    }
  ];
</script>

<style>
  #side-menu {
    background-color: #f9f9f9;
    text-align: center;
  }

  ul {
    margin: 0;
    margin-top: 3rem;
    padding: 0;
    list-style: none;
    border-top: 1px solid grey;
  }

  li {
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid grey;
  }

  a {
    text-decoration: none;
  }
</style>

<div id="side-menu">
  <img src="img/logo.svg" alt="Docs" class="logo" />
  <ul class="menu">
    {#each menuItems as item}
      <li id="menu-{item.id}" class={item.type}>
        <a href={item.path}>{item.label}</a>
      </li>
    {/each}
  </ul>
</div>
