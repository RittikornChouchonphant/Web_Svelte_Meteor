<script>
    import { Meteor } from "meteor/meteor";
    import { navigate } from "svelte-routing";

    let user = null;
    let tbc = [
        { code: "111111", title: "Python Quiz", qtn: "10", qtt: "660" },
        { code: "222222", title: "AI Quiz", qtn: "10", qtt: "640" },
        {
            code: "333333",
            title: "Data Structure Quiz",
            qtn: "20",
            qtt: "1200",
        },
        { code: "444444", title: "TOC Quiz", qtn: "20", qtt: "1130" },
    ];

    $m: {
        user = Meteor.user();
    }
</script>

<div>
    <h1>Welcome back, {user.username}</h1>
    <p>Make sure to validate your e-mail at {user.emails[0].address}.</p>
    <div class="col2">
        <div class="card">
            <h1 class="cardtitle">Created Old School Quiz</h1>
            <p>
                Here is a list of what you have created. Click on the quiz you
                want to edit
            </p>
            <div class="col3" style="margin-top: 1.4em;">
                <div style="width: 11%" />
                <div style="width: 10%" />
                <div style="width: 41%"><p>Quiz Title</p></div>
                <div style="width: 22%"><p>Questions</p></div>
                <div style="width: 16%"><p>Time</p></div>
            </div>
            <div class="scroll">
                <div>
                    {#each tbc as q, i}
                        <div
                            id={q.code}
                            style="display: flex; flex-direction: row;"
                        >
                            <div
                                class="col4"
                                on:click={() => {
                                    tbc.splice(i, 1);
                                    console.log(tbc);
                                    document.getElementById(q.code).remove();
                                    document
                                        .getElementById("q" + q.code)
                                        .remove();
                                }}
                            >
                                ❌
                            </div>
                            <div class="col4" on:click={() => {}}>🚀</div>
                        </div>
                    {/each}
                </div>
                <div style="width: 80%;">
                    <ul class="cardarea">
                        {#each tbc as q, i}
                            <li>
                                <div
                                    class="col4"
                                    id={"q" + q.code}
                                    on:click={() => {
                                        navigate("/quiz/" + q.code);
                                    }}
                                >
                                    <div class="table1">
                                        <p class="data">{q.title}</p>
                                    </div>
                                    <div class="table2">
                                        <p class="data">{q.qtn}</p>
                                    </div>
                                    <div class="table3">
                                        <p class="data">{q.qtt}</p>
                                    </div>
                                </div>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
        <div class="card">
            <p>To be continued :)</p>
        </div>
        <div class="card">
            <p>To be continued :)</p>
        </div>
    </div>
</div>

<style>
    p {
        color: #81839d;
        font-family: Nunito;
        font-weight: 100;
        margin: 0;
    }

    .col2 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(60ch, 1fr));
        row-gap: 1.8rem;
        column-gap: 1.8rem;
        margin-top: 2.5em;
    }

    .col3 {
        display: flex;
        padding: 0.5em 0.7em 0.5em 0.7em;
    }

    .col4 {
        display: flex;
        justify-content: space-evenly;
        padding: 0.5em 0.7em 0.5em 0.7em;
    }

    .col4:hover {
        cursor: pointer;
    }

    .col4:hover {
        background-color: #eeedfc;
        border-radius: 0.2em;
    }

    .table1 {
        width: 45%;
    }

    .table1:hover {
        color: #555555;
    }

    .table2 {
        width: 30%;
        display: flex;
        justify-content: center;
    }

    .table3 {
        width: 15%;
    }

    .data {
        color: #22252b;
    }

    .data:hover {
        color: #555555;
    }

    .scroll {
        overflow: auto;
        display: flex;
        flex-direction: row;
    }

    h1 {
        color: #8d89ee;
        font-family: Nunito;
        font-weight: 900;
    }

    .cardtitle {
        color: #22252b;
        font-size: 1.4vw;
    }

    .cardarea {
        list-style: none;
        padding: 0;
    }

    .card {
        background-color: #ffffff;
        border: none;
        border-radius: 0.4rem;
        box-shadow: 0.15rem 0.2rem 0.2rem -0.02rem rgba(0, 0, 0, 0.1);
        padding-top: 1.6em;
        padding-left: 1.9em;
        padding-right: 1.9em;
        padding-bottom: 2em;
        height: 30em;
    }
</style>
