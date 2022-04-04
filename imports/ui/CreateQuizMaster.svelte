<script>
    import { navigate, Router, Route } from "svelte-routing";
    import AutoGenQuiz from "./AutoGenQuiz.svelte";
    import OldschoolQuiz from "./OldschoolQuiz.svelte";

    function handleOldschoolQuiz() {
        navigate("/oldschoolquiz");
    }

    function handleWouldYouRather() {
        navigate("/wouldyourather");
    }
</script>

<div class="createmaster">
    <div style="text-align: center; margin-bottom: 1em; margin-top: 15em;">
        <h1>Which type of quiz you want to make?</h1>
    </div>
    <div class="createarea">
        <div class="thumbnail" on:click={handleOldschoolQuiz}>
            <img
                src="/assets/thumbnails/OldSchoolQuizThumbnail.png"
                alt="OldSchoolQuizThumbnail"
            /> <br />
            <p>Old School Quiz</p>
        </div>
        <div class="thumbnail">
            <a href="/autogenquiz">
                <img
                    src="/assets/thumbnails/OldSchoolQuizThumbnail.png"
                    alt="OldSchoolQuizThumbnail"
                /> <br />
                <p>Auto generate quiz</p>
            </a>
        </div>
    </div>
    <div>
        <Router>
            <Route path="oldschoolquiz" component={OldschoolQuiz} />
            <Route path="autogenquiz" component={AutoGenQuiz} />
        </Router>
    </div>
</div>

<style>
    .createmaster {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .createarea {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 0.22fr));
        justify-content: center;
    }

    h1,
    p {
        font-family: Nunito;
        color: #6e6e6e;
    }

    p {
        margin: 0;
        padding: 0;
        display: inline-block;
        font-size: 1vw;
    }

    img {
        width: 20vw;
    }

    .thumbnail {
        text-align: center;
    }

    .thumbnail:hover {
        cursor: pointer;
    }
</style>
