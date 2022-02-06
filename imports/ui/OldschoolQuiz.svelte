<script>
    import { Quiz } from "../api/Quiz";
    import { useTracker } from "meteor/rdb:svelte-meteor-data";

    $: quiz = useTracker(() => Quiz.find({}).fetch());

    let newQuiz = "";
    let question = "";
    let correctAnswer = 0;
    let answers = [];

    function handleAdd(event) {
        alert("add");
        Quiz.insert({
            question: question,
            correctAnswer: correctAnswer,
            answers: answers,
        });

        // Clear form
        question = "";
        correctAnswer = "";
        answers = [];
    }
    function handleCreate(event) {
        alert("Create");
        Quiz.insert({
            question: question,
            correctAnswer: correctAnswer,
            answers: answers,
        });

        // Clear form
        question = "";
        correctAnswer = "";
        answers = [];
    }
</script>

<div class="card">
    <div class="cardL">
        <h1>OldschoolQuiz</h1>
        <form class="new-Quiz" on:submit|preventDefault={handleCreate}>
            <p>Title Quiz</p>
            <input type="text" /><br />
            <form class="new-Quiz" on:submit|preventDefault={handleAdd}>
                <p>Questions Input</p>
                <textarea type="text" bind:value={question} />
                <p>CorrectChoice</p>
                <input
                    type="number"
                    max="4"
                    min="1"
                    bind:value={correctAnswer}
                />
                <p>Choice</p>
                <input type="text" bind:value={answers[0]} />
                <p />
                <input type="text" bind:value={answers[1]} />
                <p />
                <input type="text" bind:value={answers[2]} />
                <p />
                <input type="text" bind:value={answers[3]} />
                <p />
                <p />
                <button type="submit">add</button>
            </form>
        </form>
        <p />
        <button type="submit"><h4>Create</h4></button>
    </div>
    <div class="CardR" />
</div>

<style>
    textarea {
        width: 50%;
        resize: none;
    }
    input[type="text"] {
        width: 50%;
    }
    .card {
        display: grid;
    }
    .cardL {
        margin-left: 30%;
    }
</style>
