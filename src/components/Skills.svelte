<script lang="ts">
    import { onMount } from "svelte";
    import { langStore } from "../scripts/lang";
    import type { langType } from "../scripts/lang";
    import SkillsMap from "./charts/skillsmaps/SkillsMap.svelte";
    import Timeline from "./charts/timeline/Timeline.svelte";
    import { skills, otherSkills } from "../scripts/messages";
    import {
        data_frontend,
        data_backend,
        data_utilties,
    } from "./charts/skillsmaps/data";

    let message: string;
    let messageOther: string;

    langStore.subscribe((value: langType) => {
        let m;
        let mo;
        m = skills[value]
        mo = otherSkills[value]
        message = m.replace(/\n/g, "<br />");
        messageOther = mo.replace(/\n/g, "<br />");
    });
    message = skills.jp.replace(/\n/g, "<br />");
    messageOther = otherSkills.jp.replace(/\n/g, "<br />");

    // スクロールによるグラフ表示の発火フラグ
    let fireFrontend = false;
    let fireBackend = false;
    let fireUtilities = false;

    onMount(() => {
        const chartFrontend = document.querySelector("#cf");
        const chartBackend = document.querySelector("#cb");
        const chartUtilities = document.querySelector("#cu");

        // スクロール処理
        const observeFire = function () {
            let wy = window.pageYOffset;
            let wb = wy + window.innerHeight - 150; // ブラウザの最下部位置を取得
            // チャートの位置を取得
            let chartFrontendPos =
                // TODO: !を排除する
                wy + chartFrontend!.getBoundingClientRect().top;
            let chartBackendPos = wy + chartBackend!.getBoundingClientRect().top;
            let chartUtilitiesPos =
                wy + chartUtilities!.getBoundingClientRect().top;

            // チャートの位置がウィンドウの最下部位置を超えたら起動
            if (wb > chartFrontendPos && fireFrontend == false) {
                fireFrontend = true;
            }

            if (wb > chartBackendPos && fireBackend == false) {
                fireBackend = true;
            }

            if (wb > chartUtilitiesPos && fireUtilities == false) {
                fireUtilities = true;
            }
        };

        window.addEventListener("load", observeFire); // 読み込み時の処理
        window.addEventListener("scroll", observeFire); // スクロール時の処理
    });
</script>

<div id="skillmaps-container">
    <h2>Skills</h2>
    <h4>by Rader Chart</h4>
    <div id="skillmaps">
        <div id="cf" class="skillsmap">
            {#if fireFrontend}
                <SkillsMap data={data_frontend} title={"Web Frontend"} />
            {:else}
                <div class="blankbox" />
            {/if}
        </div>
        <div id="cb" class="skillsmap">
            {#if fireBackend}
                <SkillsMap data={data_backend} title={"Backend/Serverside"} />
            {:else}
                <div class="blankbox" />
            {/if}
        </div>
        <div id="cu" class="skillsmap">
            {#if fireUtilities}
                <SkillsMap
                    data={data_utilties}
                    title={"Utilities/Infrastructure"}
                />
            {:else}
                <div class="blankbox" />
            {/if}
        </div>
    </div>
    <h4 id="timeline-top">by Timeline</h4>
    <div id="timeline-container">
        <div id="timeline">
            <Timeline />
        </div>
    </div>
    <p>{@html message}</p>
    <p>{@html messageOther} >> <a href="https://stackshare.io/daifukuninja/shared-stack" target="_blank">https://stackshare.io/daifukuninja/shared-stack</a></p>
</div>

<style>
    p {
        font-family: "Noto Sans JP";
    }
    a {
        text-decoration: underline;
    }
    a:visited {
        color: inherit;
    }
    #skillmaps-container {
        background-color: #110011;
        padding-top: 1em;
        padding-left: 1em;
        padding-bottom: 1em;
        opacity: 0.9;
        padding-bottom: 10vh;
    }
    .blankbox {
        /* height: 50vh; */
        background-color: #110011;
        opacity: 0.9;
    }
    #skillmaps {
        margin-bottom: 1em;
    }

    .skillsmap {
        background-color: #000000;
        margin-bottom: 5em;
        margin-right: 1em;
    }

    @media (min-width: 768px) {
        .skillsmap {
            width: 30vw;
        }
        #skillmaps {
            display: flex;
            justify-content: space-around;
        }
    }

    #timeline-container {
        background-color: #110011;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0.9;
    }
    #timeline {
        width: 95%;
        padding-bottom: 2em;
    }
    @media (min-width: 768px) {
        #timeline {
            width: 80vw;
        }
    }
</style>
