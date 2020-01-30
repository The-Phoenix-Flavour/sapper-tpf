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

  .error {
    color: crimson;
  }

  a {
    display: block;
    text-align: center;
    font-size: 23px;
  }

  /*.social-icon-link :global(.social-icon) {
    padding: 6px;
    border-radius: 4px;
    background-color: #455e70;
    box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px,
      rgba(71, 63, 79, 0.08) 0px 1px 2px;
  }*/

  .social-icon-link :global(.social-icon:hover) {
  }
</style>

<nav>
  <ul class="clean-list">
    {#each socials as social}
      <li>
        {#if !social.hasOwnProperty('icon')}
          <a
            class={classNames('clean-link', { error: validateProps(social) })}
            aria-label={social.name}
            href={social.url}>
            {social.name}
          </a>
        {:else}
          <a
            class={classNames('clean-link', { error: validateProps(social) })}
            aria-label={social.name}
            href={social.url}>
            <Icon class="fix-icon" icon={social.icon} />
          </a>
        {/if}
      </li>
    {/each}
  </ul>
</nav>
