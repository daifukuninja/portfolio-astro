<script lang="ts">
    import Introduction from "./Introduction.svelte";
    import BottomArrow from "./BottomArrow.svelte";
    import SelectLang from "./SelectLang.svelte";
    const message_jp =
        `ここは日本在住のエンジニア、 \nMIHARA Keishi のポートフォリオサイトです。`
        .replace(/\n/g, "<br />");
    const message_en = 
        `This is Keishi MIHARA's portfolio site.
        ( web + backend + desktop application engineer.  ...well....I'll do whatever I can. )`
        .replace(/\n/g, "<br />");
</script>

<div class="beginning">
    <h4>{@html message_jp}</h4>
    <h5>{@html message_en}</h5>
    <SelectLang />
    <Introduction />
    <BottomArrow />
</div>

<style>
    h4,
    h5 {
        font-family: "Noto Sans JP";
    }
    .beginning {
        background-color: #110011;
        height: 100vh;
        /* width: 100%; */
        padding-left: 1em;
    }
</style>
