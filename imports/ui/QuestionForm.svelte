<script>
    import { Collection } from "../api/Collection";
    import { Button } from "sveltestrap";

    let newQuestion = "";

    var input = document.getElementById("questionInput");
    if (input !== null) {
        input.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("submitButton").click();
            }
        });
    }

    const handleSubmit = () => {
        Collection.insert({
            text: newQuestion,
            createdAt: new Date(),
        });
        // Clear form
        newQuestion = "";
    };

    const deleteHandler = () => {
        last = Collection.find({}, { sort: { createdAt: -1 } }).fetch();
        Collection.remove(last[0]._id);
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input
        id="questionInput"
        type="text"
        name="text"
        placeholder="Who is the best programmer?"
        bind:value={newQuestion}
    />
    <Button type="button" color="danger" on:click={deleteHandler}
        >Delete question</Button
    >
    <button id="submitButton" type="submit" class="hidden">
        Add question
    </button>
</form>
