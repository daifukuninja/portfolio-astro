<script lang="ts">
  import { langStore } from "../scripts/lang";
  import type { langType } from "../scripts/lang";

  let langKey: langType;

  langStore.subscribe((l) => {
    langKey = l;
  });

  const switchLanguage = (l: langType) => {
    return () => {
      langStore.update((_) => {
        return l;
      });
    };
  };
</script>

<ul>
  {#if langKey != "jp"}
    <li><a href={null} on:click={switchLanguage("jp")}>日本語はこちら</a></li>
  {/if}
  {#if langKey != "en"}
    <li><a href={null} on:click={switchLanguage("en")}>Click here for English.</a></li>
  {/if}
  {#if langKey != "es"}
    <li><a href={null} on:click={switchLanguage("es")}>Haga clic aquí para español.</a></li>
  {/if}
</ul>

<style>
  a {
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 0.8ex;
    color: white;
    font-family: "Noto Sans JP";
  }

  ul {
    list-style: none;
    border-left: solid 3px whitesmoke;
    padding-left: 1em;
    padding-bottom: 0.3em;
  }
</style>
