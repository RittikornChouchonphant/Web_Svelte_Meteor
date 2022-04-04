<script>
    import { Meteor } from "meteor/meteor";
    import { navigate } from "svelte-routing";
    import { Quiz } from '../api/Quiz';
    let inc = 4;

    let fileinput;

    let num =  Math.floor(Math.random() * 999999);

    let quiztitle = "";

    let quiz = [
        {
            qno: "1",
            ques: "",
            qimg: "https://cdn.discordapp.com/attachments/731849212274147339/938705659153747968/Group_3.png",
            c1: "",
            c2: "",
            c3: "",
            c4: "",
            c1c: false,
            c2c: false,
            c3c: false,
            c4c: false,
            t: 30,
        },
        {
            qno: "2",
            ques: "",
            qimg: "https://cdn.discordapp.com/attachments/731849212274147339/938705659153747968/Group_3.png",
            c1: "",
            c2: "",
            c3: "",
            c4: "",
            c1c: false,
            c2c: false,
            c3c: false,
            c4c: false,
            t: 30,
        },
        {
            qno: "3",
            ques: "",
            qimg: "https://cdn.discordapp.com/attachments/731849212274147339/938705659153747968/Group_3.png",
            c1: "",
            c2: "",
            c3: "",
            c4: "",
            c1c: false,
            c2c: false,
            c3c: false,
            c4c: false,
            t: 30,
        },
        {
            qno: "4",
            ques: "",
            qimg: "https://cdn.discordapp.com/attachments/731849212274147339/938705659153747968/Group_3.png",
            c1: "",
            c2: "",
            c3: "",
            c4: "",
            c1c: false,
            c2c: false,
            c3c: false,
            c4c: false,
            t: 30,
        },
    ];

    function addQuestion() {
        if (inc < 20) {
            inc = inc + 1;
            quiz.push({
                qno: inc,
                ques: "",
                qimg: "https://cdn.discordapp.com/attachments/731849212274147339/938705659153747968/Group_3.png",
                c1: "",
                c2: "",
                c3: "",
                c4: "",
                c1c: false,
                c2c: false,
                c3c: false,
                c4c: false,
                t: 30,
            });
            quiz = quiz;
        }
    }

    function deleteLastQuestion() {
        if (inc > 4) {
            inc = inc - 1;
            quiz.pop();
            quiz = quiz;
        }
    }

    function CancelChanges() {
        navigate("/createquiz", { replace: true });
    }

    function SaveChanges() {
        if (quiztitle == "" || quiztitle.length < 5) {
            alert("Quiz title requires at least 5 characters");
            return;
        }
        for (var i = 0; i < quiz.length; i++) {
            if (quiz[i].c1 == "" || quiz[i].c2 == "") {
                alert("choice 1 and 2 is required!");
                break;
            }
            if (quiz[i].ques.length < 10) {
                alert("question requires at least 10 characters");
                break;
            }
        }

        Quiz.insert({
                name:quiztitle, 
                User:user,
                No: num,
                createAt:new Date(),
                Quiz:quiz,
        });
        alert("Save Change");

        return;
    }

    const onFileSelected = (e, i) => {
        let image = e.target.files[0];
        let reader = new FileReader();
        if (image.size >= 100000) {
            alert("Maximum image size is 1MB");
        } else {
            reader.readAsDataURL(image);
            reader.addEventListener("load", function () {
                quiz[i].qimg = reader.result;
            });
            return;
        }
    };

    let user = null;
    $m: {
        user = Meteor.user();
    }
</script>

<div class="mastermenu">
    <div class="sidebar">
        <div class="navblock" style="margin-top: 1em;">
            <h2>Welcome back, {user.username}</h2>
        </div>
        <div class="line" />
        <div
            class="navblock"
            on:click={() => {
                navigate("/menu");
            }}
        >
            <h2>Dashboard</h2>
        </div>
        <div
            class="navblock"
            style="background-color: #eff0ff;"
            on:click={() => {
                navigate("/createquiz");
            }}
        >
            <h2>Old School Quiz</h2>
        </div>
        <div
            class="navblock"
            on:click={() => {
                Meteor.logout();
                navigate("/");
            }}
        >
            <h2>Logout</h2>
        </div>
    </div>
    <div class="col2">
        <div class="left">
            <ul class="cardarea">
                {#each quiz as q (q.qno)}
                    <li class="card">
                        <div class="col3">
                            <h1>Question {q.qno}</h1>
                            <div class="pcard">
                                <input
                                    class="googleinput"
                                    type="text"
                                    placeholder="Question {q.qno}"
                                    bind:value={q.ques}
                                />
                                <img
                                    src={q.qimg}
                                    alt="questionimage"
                                    width="52%"
                                    style="cursor: pointer;"
                                    on:click={() => {
                                        fileinput.click();
                                    }}
                                />
                                <input
                                    style="display:none"
                                    type="file"
                                    accept=".jpg, .jpeg, .png"
                                    on:change={(e) => {}}
                                    bind:this={fileinput}
                                />
                                <div class="choices">
                                    <div class="a" id="a{q.qno}">
                                        <div
                                            class="toggleanswer"
                                            on:click={() => {
                                                if (q.c1c == false) {
                                                    document.getElementById(
                                                        "a" + q.qno
                                                    ).style.opacity = 0.7;
                                                    q.c1c = true;
                                                } else {
                                                    document.getElementById(
                                                        "a" + q.qno
                                                    ).style.opacity = 1.0;
                                                    q.c1c = false;
                                                }
                                            }}
                                        />
                                        <input
                                            class="inputchoice"
                                            type="text"
                                            placeholder="Add answer 1"
                                            maxlength="30"
                                            required
                                            bind:value={q.c1}
                                        />
                                    </div>
                                    <div class="b" id="b{q.qno}">
                                        <div
                                            class="toggleanswer"
                                            on:click={() => {
                                                if (q.c2c == false) {
                                                    document.getElementById(
                                                        "b" + q.qno
                                                    ).style.opacity = 0.7;
                                                    q.c2c = true;
                                                } else {
                                                    document.getElementById(
                                                        "b" + q.qno
                                                    ).style.opacity = 1.0;
                                                    q.c2c = false;
                                                }
                                            }}
                                        />
                                        <input
                                            class="inputchoice"
                                            type="text"
                                            placeholder="Add answer 2"
                                            maxlength="30"
                                            required
                                            bind:value={q.c2}
                                        />
                                    </div>
                                    <div class="c" id="c{q.qno}">
                                        <div
                                            class="toggleanswer"
                                            on:click={() => {
                                                if (q.c3 != "") {
                                                    if (q.c3c == false) {
                                                        document.getElementById(
                                                            "c" + q.qno
                                                        ).style.opacity = 0.7;
                                                        q.c3c = true;
                                                    } else {
                                                        document.getElementById(
                                                            "c" + q.qno
                                                        ).style.opacity = 1.0;
                                                        q.c3c = false;
                                                    }
                                                } else {
                                                    alert(
                                                        "Please fill in choice 3 and 4 first"
                                                    );
                                                }
                                            }}
                                        />
                                        <input
                                            class="inputchoice"
                                            type="text"
                                            placeholder="Add answer 3 (Optional)"
                                            maxlength="30"
                                            bind:value={q.c3}
                                        />
                                    </div>
                                    <div class="d" id="d{q.qno}">
                                        <div
                                            class="toggleanswer"
                                            on:click={() => {
                                                if (q.c4 != "") {
                                                    if (q.c4c == false) {
                                                        document.getElementById(
                                                            "d" + q.qno
                                                        ).style.opacity = 0.7;
                                                        q.c4c = true;
                                                    } else {
                                                        document.getElementById(
                                                            "d" + q.qno
                                                        ).style.opacity = 1.0;
                                                        q.c4c = false;
                                                    }
                                                } else {
                                                    alert(
                                                        "Please fill in choice 3 and 4 first"
                                                    );
                                                }
                                            }}
                                        />
                                        <input
                                            class="inputchoice"
                                            type="text"
                                            placeholder="Add answer 4 (Optional)"
                                            maxlength="30"
                                            bind:value={q.c4}
                                        />
                                    </div>
                                </div>
                                <div class="parameters">
                                    <p class="pl">Time Limit (sec):</p>
                                    <input
                                        bind:value={q.t}
                                        class="timeout"
                                        type="number"
                                        min="10"
                                        max="90"
                                        placeholder="30"
                                    />
                                </div>
                            </div>
                        </div>
                    </li>
                {/each}
            </ul>
        </div>
        <div class="right">
            <button class="addbutton" on:click={addQuestion}>
                Add question
            </button>
            <button class="deletebutton" on:click={deleteLastQuestion}>
                Delete last question
            </button>
            <button class="cancelbutton" on:click={CancelChanges}>
                Cancel changes
            </button>
            <button class="savebutton" on:click={SaveChanges}>
                Save changes
            </button>
            <h1>Quiz Title?</h1>
            <input
                bind:value={quiztitle}
                type="text"
                placeholder="quiz"
                maxlength="30"
                minlength="5"
                required
            />
        </div>
    </div>
</div>

<style>
    @font-face {
        font-family: "Supermarket";
        src: url(/fonts/supermarket.ttf) format("truetype");
    }

    .mastermenu {
        background-color: #f7f7ff;
        display: grid;
        grid-template-columns: 12% auto;
    }

    .sidebar {
        height: 100vh;
        background-color: #ffffff;
        position: sticky;
        top: 0;
    }

    .navblock {
        width: 100%;
        border-radius: 0.4em;
        padding: 0.7em 0.2em 0.2em 0.9em;
        margin-bottom: 1em;
    }

    .navblock:hover {
        background-color: #eff0ff;
        cursor: pointer;
    }

    .line {
        background-color: #eff0ff;
        height: 5px;
        width: 87%;
        margin-left: auto;
        margin-right: auto;
        border-radius: 0.4em;
        margin-bottom: 2em;
    }

    h2 {
        font-family: Nunito;
        font-size: 1.7em;
        color: #8d89ee;
    }

    .col2 {
        display: flex;
        flex-direction: row;
        padding-left: 2em;
        padding-top: 2em;
    }

    .col3 {
        display: flex;
        flex-direction: column;
    }

    h1 {
        color: #6e6e6e;
        font-family: Nunito;
        font-size: 1.1vw;
        font-weight: 900;
    }

    .pcard {
        margin-top: 0.7em;
        border: none;
        border-radius: 0.4rem;
        background-color: #f7f7ff;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        padding-bottom: 1em;
    }

    .toggleanswer {
        width: 7%;
        cursor: pointer;
    }

    .googleinput {
        text-align: center;
        background-color: #f7f7ff;
        color: #6e6e6e;
        font-family: Supermarket;
        font-size: 1.4em;
        width: 20rem;
        border: 0;
        padding: 0;
        margin-top: 1rem;
        border-bottom: 2px solid #8d89ee;
    }

    img {
        margin-top: 1.5rem;
        border-radius: 0.8em;
    }

    .choices {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
        row-gap: 1rem;
        width: 85%;
        margin-top: 1.6rem;
    }

    .a,
    .b,
    .c,
    .d {
        border-radius: 0.25em;
        display: flex;
        justify-content: end;
    }

    .a {
        background-color: #fa8072;
    }

    .b {
        background-color: #8299f5;
    }

    .c {
        background-color: #ffa875;
    }

    .d {
        background-color: #6ad6a4;
    }

    .inputchoice {
        border: none;
        background-color: #ffffff;
        border-radius: 0em 0.15em 0.15em 0em;
        width: 93%;
        font-family: Supermarket;
        font-size: 1.3rem;
        color: #766e77;
        padding-left: 0.8em;
        padding-right: 0.8em;
        padding-bottom: 0.2em;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }

    input:focus {
        outline: none;
        box-shadow: none;
    }

    .parameters {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 85%;
        margin-top: 0.5em;
    }

    .timeout {
        border: none;
        border-radius: 0.2em;
        font-family: Supermarket;
        font-size: 1.3rem;
        text-align: center;
        color: #766e77;
        padding-bottom: 0.2em;
        width: 3rem;
    }

    .timeout:invalid {
        background-color: #ffddd9;
        color: #fa8072;
    }

    .pl {
        font-family: Supermarket;
        color: #6e6e6e;
        font-size: 1.3rem;
        margin-right: 0.5em;
        margin-top: 0.6em;
    }

    .left {
        width: 73vw;
    }

    .right {
        height: fit-content;
        display: grid;
        padding-left: 1.8vw;
        position: sticky;
        top: 0;
        z-index: 1;
    }

    .cardarea {
        list-style: none;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(60ch, 1fr));
        row-gap: 2.2rem;
        column-gap: 2.2rem;
        max-width: 100vw;
    }

    .card {
        background-color: #ffffff;
        border: none;
        border-radius: 0.4rem;
        box-shadow: 0.15rem 0.2rem 0.2rem -0.02rem rgba(0, 0, 0, 0.1);
        padding-top: 1.1rem;
        padding-left: 1.8rem;
        padding-right: 1.8rem;
        padding-bottom: 1.4rem;
        overflow: hidden;
    }

    button {
        border: none;
        border-radius: 0.3em;
        text-align: center;
        padding: 0.8rem;
        margin-bottom: 1em;
        color: #ffffff;
        font-family: Nunito;
        font-size: 0.9vw;
        width: 100%;
    }

    .addbutton {
        background-color: #8299f5;
    }

    .deletebutton {
        background-color: #fa8072;
    }

    .cancelbutton {
        background-color: #ffa875;
    }

    .savebutton {
        background-color: #6ad6a4;
    }
</style>
