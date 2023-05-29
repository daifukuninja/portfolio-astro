<script lang="ts">
</script>

<div class="wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" style="fill: rgba(192, 192, 192, 1);" class="arrow">
        <path d="M16.939 10.939 12 15.879l-4.939-4.94-2.122 2.122L12 20.121l7.061-7.06z" />
        <path d="M16.939 3.939 12 8.879l-4.939-4.94-2.122 2.122L12 13.121l7.061-7.06z" />
    </svg>
</div>

<style>
    .arrow path {
        -webkit-animation: stroke 0.8s ease-in-out infinite alternate;
        animation: stroke 0.8s ease-in-out infinite alternate;
    }

    @-webkit-keyframes stroke {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes stroke {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    .wrapper {
        position: relative;
        top: 10%;
        left: 0.5em;
        width: 90vw;
    }
    @media (min-width: 768px) {
        .wrapper {
            top: 10%;
        }
    }
</style>
