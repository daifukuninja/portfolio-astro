<script lang="ts">
    import { introduction } from "../scripts/messages";
    import { langStore } from "../scripts/lang";
    import type { langType } from "../scripts/lang";

    let message = introduction.jp.replace(/\n/g, "<br />");

    langStore.subscribe((l: langType) => {
        message = introduction[l].replace(/\n/g, "<br />");
    });
</script>

<div class="intro">
    <p>{@html message}</p>
</div>

<style>
    p {
        font-family: "Noto Sans JP";
    }
    .intro {
        background-color: #110011;
        padding-top: 1em;
    }
</style>
