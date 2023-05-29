<script lang="ts">
    import { langStore } from "../scripts/lang";
    import type { langType } from "../scripts/lang";

    const articleCount = 5;

    let lang: langType = "jp";
    langStore.subscribe((value: langType) => {
        lang = value;
    });
</script>

<div id="articles-caption">
    {#if lang == "jp"}
        <a href="https://zenn.dev/" target="_blank">Zenn</a> で技術記事を書いています。(<a href="https://zenn.dev/daifukuninja" target="_blank">@daifukuninja</a>)<br />
        初めて触った技術のインプレッション, 日々の仕事の中で得た小さな気付きなどを中心に、なるべくこまめにアウトプットできるよう心がけています。<br />
        ここでは最新の {articleCount} 件の記事を紹介します。
    {:else if lang == "en"}
        I write technical articles on <a href="https://zenn.dev/" target="_blank">Zenn</a>.(<a href="https://zenn.dev/daifukuninja" target="_blank">@daifukuninja</a>)<br />
        I try to output as often as possible, focusing on impressions of technologies I have touched for the first time, and small insights I have gained in my daily work.<br />
        Here are the {articleCount} most recent articles.<br />
        (very truely sorry, Japanese only.)
    {:else if lang == "es"}
        Escribo artículos técnicos sobre <a href="https://zenn.dev/" target="_blank">Zenn</a>.(<a href="https://zenn.dev/daifukuninja" target="_blank">@daifukuninja</a>)<br />
        Trato de generar resultados con la mayor frecuencia posible, centrándome en las impresiones de las tecnologías que he tocado por primera vez y las pequeñas ideas que he obtenido en mi trabajo diario.<br />
        Aquí están los {articleCount} artículos más recientes.<br />
        (Lo siento mucho, solo en japonés.)
        <!-- {:else if lang == "es"} -->
        <!-- ..... -->
    {/if}
</div>

<style>
    #articles-caption {
        font-family: "Noto Sans JP";
        padding-bottom: 1em;
    }
</style>
