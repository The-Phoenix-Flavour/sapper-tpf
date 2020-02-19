<script>
  import Icon from "fa-svelte";
  import classNames from "classnames";

  export let socials;

  //TODO: make cleaner anonymous function? => ()
  //TODO: let function use dot operator e.g. social.valiateProps()
  function validateProps(item) {
    let flag = false;

    if (!item.hasOwnProperty("name") || item.name == "") {
      flag = true;
    } else if (!item.hasOwnProperty("url") || item.url == "") {
      flag = true;
    }

    return flag;
  }
</script>

<style>
  ul {
    display: flex;
    align-items: center;
  }

  /* Workround for browsers that don't have the gap property */
  /* TODO: make this a rollback only if browser doesn't suppoer gap */
  ul > * + * {
    margin-left: 1rem;
  }

  a {
    display: block;
    text-align: center;
  }

  .icon {
    font-size: 23px;
  }

  .error {
    color: crimson;
  }

  /*
  .social-icon-link :global(.social-icon:hover) {
  }
  */
</style>

<nav>
  <ul class="clean-list">
    {#each socials as social}
      <li>

        <a
          target="_blank"
          rel="noopener noreferrer"
          class={classNames('clean-link', { icon: social.icon }, { error: validateProps(social) })}
          aria-label={social.name}
          href={social.url}>
          {#if social.hasOwnProperty('icon')}
            <Icon class="fix-icon" icon={social.icon} />
          {:else}{social.name}{/if}
        </a>
      </li>
    {/each}
  </ul>
</nav>
