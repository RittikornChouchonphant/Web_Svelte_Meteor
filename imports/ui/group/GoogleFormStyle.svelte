<script>
    import { Card } from "sveltestrap";

    let no = 1;
</script>

<div>
    <Card style="padding: 4% 8% 7% 8%; border-radius: 6px;">
        <form>
            <label for="quizQuestion"> Question {no} </label> <br />
            <input
                class="qinput"
                id="quizQuestion"
                name="question"
                placeholder="Type your question here..."
                required
            />
        </form>
    </Card>
</div>

<style>
    @font-face {
        font-family: "SegoeUI";
        src: url(/fonts/segoeui.woff2) format("woff2");
    }

    div {
        font-size: 0.9vw;
        width: 25vw;
    }

    input,
    label {
        font-family: SegoeUI;
    }

    .qinput {
        width: 100%;
        border: 1px solid rgb(199, 199, 199);
        border-radius: 6px;
        padding: 6px 0px 9px 14px;
        margin: 20px 0px 0px 0px;
    }
</style>
