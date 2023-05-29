<script lang="ts">
    import { langStore } from "../scripts/lang";
    import type { langType } from "../scripts/lang";
    import { profile } from "../scripts/messages";

    let message = profile.jp.replace(/\n/g, "<br />");

    langStore.subscribe((l: langType) => {
        let m;
        m = profile[l];
        message = m.replace(/\n/g, "<br />");
    });
</script>

<div id="profile">
    <h2>Profile</h2>
    <p>{@html message}</p>
    <!-- <div class="blankbox" /> -->
</div>

<style>
    p {
        font-family: "Noto Sans JP";
        margin-bottom: 0;
    }
    #profile {
        background-color: #110011;
        padding-left: 1em;
        opacity: 0.9;
    }
    @media (min-width: 768px) {
        p {
            width: 50vw;
        }
    }
</style>
