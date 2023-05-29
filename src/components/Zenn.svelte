<script lang="ts">
    import { langStore } from "../scripts/lang";
    import type { langType } from "../scripts/lang";
    import { getZennFeeds } from "../scripts/getZennFeeds";
    import type { Root } from "../scripts/getZennFeeds";
    import ZennCaption from "./ZennCaption.svelte";

    let promise = getZennFeeds<Root>("daifukuninja");
    const articleCount = 5;

    let isJa = true;
    langStore.subscribe((value: langType) => {
        if (value == ("jp" as langType)) {
            isJa = true;
        } else {
            isJa = false;
        }
    });
</script>

<div id="zenn-container">
    <h2>Articles</h2>
    <ZennCaption />
    {#await promise}
        <p>loading...</p>
    {:then params}
        <div id="articles-container">
            {#each { length: articleCount } as _, i}
                <div class="article">
                    <a href={params.items[i].link} target="_blank">
                        <img src={params.items[i].enclosure.link} alt="thumbnail" />
                    </a>
                    <p class="zenn-description">
                        {@html params.items[i].description.replace(/\n/g, "<br />")}
                    </p>
                    <p class="zenn-pubdate">posted at {params.items[i].pubDate}</p>
                </div>
            {/each}
        </div>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
    <h5>powered by Zenn</h5>
</div>
<div class="blankbox" />

<style>
    #zenn-container {
        background-color: #110011;
        opacity: 0.9;
        padding-left: 1em;
    }
    .zenn-description {
        font-size: small;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
    }
    .zenn-pubdate {
        font-size: small;
    }
    #articles-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
    }
    .article {
        width: 360px;
    }
    .blankbox {
        height: 50vh;
        background-color: #110011;
        opacity: 0.9;
    }
    h5 {
        margin-bottom: 0;
    }
    p {
        font-family: "M PLUS Rounded 1c";
    }
    a {
        text-decoration: underline;
    }
    a:visited {
        color: inherit;
    }
</style>
