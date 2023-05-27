<script lang="ts">
    import { lang } from "../scripts/lang";
    let langKey: string;

    lang.subscribe((value) => {
        langKey = value;
    });

    const switchLanguage = (l: string) => {
        return () => {
            lang.update((_) => {
                return l;
            });
        };
    };
</script>

{#if langKey == "ja"}
    <a href={null} on:click={switchLanguage("en")}>English here.</a>
{:else}
    <a href={null} on:click={switchLanguage("ja")}>日本語はこちら</a>
{/if}

<style>
    a {
        cursor: pointer;
        text-decoration: underline;
    }
</style>
