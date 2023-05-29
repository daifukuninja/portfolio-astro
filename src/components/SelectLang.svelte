<script lang="ts">
  import { langStore } from "../scripts/lang";
  import type { langType } from "../scripts/lang";

  let langKey: langType;

  langStore.subscribe(value => {
    langKey = value;
  });

  const switchLanguage = (l: langType) => {
    return () => {
      langStore.update(_ => {
        return l;
      });
    };
  };
</script>

{#if langKey == "jp"}
  <a href={null} on:click={switchLanguage("en")}>Click here for English.</a>
  <a href={null} on:click={switchLanguage("es")}>Haga clic aquí para español.</a>
{:else if langKey == "en"}
  <a href={null} on:click={switchLanguage("es")}>Haga clic aquí para español.</a>
  <a href={null} on:click={switchLanguage("jp")}>日本語はこちら</a>
{:else if langKey == "es"}
  <a href={null} on:click={switchLanguage("en")}>Click here for English.</a>
  <a href={null} on:click={switchLanguage("jp")}>日本語はこちら</a>
{/if}

<style>
  a {
    cursor: pointer;
    text-decoration: underline;
  }
</style>
