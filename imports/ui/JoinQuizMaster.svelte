<script>
    import { links, navigate } from "svelte-routing";
    import { QuizTaker } from '../api/QuizTaker';

    export let id;
    console.log(id);
    let guestName;
    let factArr = [
        "In Japan more paper is used to make manga than toilet paper.",
        "A full head of human hair is strong enough to support 12 tons.",
        "The coldest temperature ever recorded occurred in Antarctica, -144 Fahrenheit.",
    ];

    let dot = [".", "..", "..."];
    let fact = "Fun Fact: ";
    i = Math.floor(Math.random() * 100) % 3;
    fact += factArr[i];

    let completeForm = false;
    function handleLobby() {
        QuizTaker.insert({
            no: id,
            name: guestName,
            score: 0,
        });
        completeForm = true;
    }

    var doughnut = 0;
    window.setInterval(function () {
        doughnut = doughnut + 1;
        d = doughnut % 3;
        document.getElementById("info").innerHTML =
            "Waiting for instructors" + dot[d];
    }, 1000);
</script>

{#if completeForm == false}
    <div class="masterform">
        <div style="height: 9vw;" />
        <div use:links>
            <a href="/">
                <img src="/assets/icons/Catto.png" alt="catto" />
            </a>
        </div>
        <div>
            <form on:submit={handleLobby}>
                <input
                    class="googleinput"
                    type="text"
                    bind:value={guestName}
                    placeholder="My nickname is..."
                />
            </form>
        </div>
        <div style="height: 22vw;" />
        <div>
            <h1 id="fact">{fact}</h1>
        </div>
    </div>
{:else}
    <div class="masterform">
        <h1 class="info" id="info">Waiting for instructors...</h1>
        <div style="height: 3vw;" />
        <div use:links>
            <a href="/startquiz/{id}">
                <img src="/assets/icons/Catto2.png" alt="catto" />
            </a>
        </div>
        <div style="height: 10vw;" />
        <div>
            <h1 id="fact">{fact}</h1>
        </div>
    </div>
{/if}

<style>
    @font-face {
        font-family: "Gotham";
        src: url(/fonts/gotham-bold.woff2) format("woff2");
    }


    h1 {
        margin: 0;
        color: #ffffff;
        font-family: "Gotham";
        font-size: 2em;
    }

    div {
        display: flex;
        justify-content: center;
        text-align: center;
    }

    img {
        max-width: 300px;
        max-height: 150px;
        width: auto;
        height: auto;
    }

    .masterform {
        background-color: #6ad6a4;
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .googleinput {
        text-align: center;
        background-color: transparent;
        color: #ffffff;
        font-family: Supermarket;
        font-size: 2em;
        width: 20rem;
        border: 0;
        padding: 0;
        margin-top: 1rem;
        border-bottom: 2px solid #ffffff;
    }

    .info {
        font-family: "Rockwell";
        font-size: 2.5vw;
        font-weight: 600;
    }
</style>
