<script>
    import { navigate } from "svelte-routing";

    export let id;

    let quizArr = [
        "Rittikorn",
        "123456",
        {
            quiz: [
                {
                    q: "Question 1",
                    timeout: "30",
                    img: "https://cdn.discordapp.com/attachments/731849212274147339/911087741075324958/perfstat_fail.png",
                    c1: "choice1question1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                    c1t: false,
                    c2: "choice2question1",
                    c2t: false,
                    c3: "choice3question1",
                    c3t: false,
                    c4: "choice4question1",
                    c4t: true,
                },
                {
                    q: "Question 2",
                    timeout: "30",
                    img: "https://cdn.discordapp.com/attachments/731849212274147339/911087741075324958/perfstat_fail.png",
                    c1: "c1q2",
                    c1t: false,
                    c2: "c2q2",
                    c2t: false,
                    c3: "c3q2",
                    c3t: true,
                    c4: "c4q2",
                    c4t: false,
                },
                {
                    q: "Question 3",
                    timeout: "30",
                    img: "https://cdn.discordapp.com/attachments/731849212274147339/911087741075324958/perfstat_fail.png",
                    c1: "c1q3",
                    c1t: false,
                    c2: "c2q3",
                    c2t: true,
                    c3: "c3q3",
                    c3t: false,
                    c4: "c4q3",
                    c4t: false,
                },
                {
                    q: "Question 4",
                    timeout: "30",
                    img: "https://cdn.discordapp.com/attachments/731849212274147339/911087741075324958/perfstat_fail.png",
                    c1: "c1q4",
                    c1t: true,
                    c2: "c2q4",
                    c2t: false,
                    c3: "c3q4",
                    c3t: false,
                    c4: "c4q4",
                    c4t: false,
                },
                {
                    q: "Question 5",
                    timeout: "30",
                    img: "https://cdn.discordapp.com/attachments/731849212274147339/911087741075324958/perfstat_fail.png",
                    c1: "c1q5",
                    c1t: false,
                    c2: "c2q5",
                    c2t: true,
                    c3: "c3q5",
                    c3t: false,
                    c4: "c4q5",
                    c4t: false,
                },
            ],
        },
    ];

    let use = quizArr[2].quiz;
    let qindex = 0;
    var countdown = 5;
    function startTimer() {
        if (countdown != 0) {
            countdown -= 1;
        } else {
            document.getElementById("counter").style.display = "none";
            document.getElementById("quiz").style.display = "block";
        }
    }
    setInterval(startTimer, 1000);

    let t;
    let timesup = false;
    function counter() {
        if (t != 0) {
            t -= 1;
            document.getElementById("quiztimeleft").innerHTML = t;
        } else {
            document.getElementById("quiztimeleft").innerHTML = "Times up!";
            timesup = true;
            showAnswer();
        }
    }
    setInterval(counter, 1000);

    function setQuizTimer(time) {
        t = time;
        return t;
    }

    function switchTimer(c) {
        countdown = c;
        t = 36;
        document.getElementById("quiz").style.display = "none";
        document.getElementById("counter").style.display = "block";
    }

    let isAnswer = false;
    function handleAnswer(c) {
        if (isAnswer == false && timesup == false) {
            alert("You choose choice " + c);
            isAnswer = true;
        }
    }

    function showAnswer() {
        document.getElementById("c1").style.backgroundColor = "#FA8072";
    }
</script>

<div id="counter" class="counter" style="display: block;">
    <div class="contain" style="height: 95vh;">
        <h2>{countdown}</h2>
    </div>
</div>
<div id="quiz" class="quiz" style="display: none;">
    <div class="contain">
        <p style="margin-bottom: 1.2em;" id="quiztimeleft">
            {(z = setQuizTimer(36))}
        </p>
        <div class="qbase" on:click={() => switchTimer(5)}>
            <h1>{use[0].q}</h1>
        </div>
        <img alt="img" src={use[0].img} />
        <div class="xbase">
            <div
                id="c1"
                class="cbase"
                on:click={() => {
                    handleAnswer("c1t");
                }}
            >
                <p>{use[0].c1}</p>
            </div>
            <div
                id="c2"
                class="cbase"
                on:click={() => {
                    handleAnswer("c2t");
                }}
            >
                <p>{use[0].c2}</p>
            </div>
            <div
                id="c3"
                class="cbase"
                on:click={() => {
                    handleAnswer("c3t");
                }}
            >
                <p>{use[0].c3}</p>
            </div>
            <div
                id="c4"
                class="cbase"
                on:click={() => {
                    handleAnswer("c4t");
                }}
            >
                <p>{use[0].c4}</p>
            </div>
        </div>
    </div>
</div>

<style>
    @font-face {
        font-family: "Gotham";
        src: url(/fonts/gotham-bold.woff2) format("woff2");
    }

    @font-face {
        font-family: "Supermarket";
        src: url(/fonts/supermarket.ttf) format("truetype");
    }

    img {
        border-radius: 0.5em;
        max-height: 300px;
    }

    h2 {
        font-family: "Gotham";
        font-size: 15em;
        color: #ffffff;
    }

    h1 {
        font-family: "Supermarket";
        font-size: 4em;
        color: #ffffff;
    }

    p {
        font-family: "Supermarket";
        font-size: 2em;
        color: #ffffff;
        margin: 0;
    }

    .counter {
        background-color: #7f83ff;
        align-items: center;
        height: 100vh;
    }

    .quiz {
        background-color: #7f83ff;
        align-items: center;
    }

    .contain {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 3em;
        padding-bottom: 6em;
    }

    .qbase {
        background-color: #6f72dd;
        border-radius: 0.8em;
        padding: 0em 2.2em 0.2em 2.2em;
        margin-bottom: 2em;
        max-width: 85%;
    }

    .xbase {
        width: 87vw;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 0.5rem;
        margin-top: 6em;
    }

    .cbase {
        height: 20em;
        background-color: #6f72dd;
        padding: 0em 2.2em 0.7em 2.2em;
        border-radius: 0.4em;
        text-align: center;
        word-wrap: break-word;
    }

    .cbase:hover {
        background-color: #6f73ddb7;
        cursor: pointer;
    }
</style>
