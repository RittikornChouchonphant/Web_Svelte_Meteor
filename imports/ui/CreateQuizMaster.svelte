<script>
    import { navigate, Router, Route } from "svelte-routing";
    import AutoGenQuiz from "./AutoGenQuiz.svelte";
    import OldschoolQuiz from "./OldschoolQuiz.svelte";
    import WouldYouRather from "./WouldYouRather.svelte";

    function handleOldschoolQuiz() {
        navigate("/oldschoolquiz");
    }

    function handleWouldYouRather() {
        navigate("/wouldyourather");
    }
</script>

<div>
    <Router>
        <h1>Which type of quiz you want to make?</h1>
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
        <div class="thumbnail" on:click={handleWouldYouRather}>
            <img
                src="/assets/thumbnails/WouldYouRatherThumbnail.png"
                alt="WouldYouRatherThumbnail"
            /> <br />
            <p>Would you rather?</p>
        </div>
        <div>
            <Route path="oldschoolquiz" component={OldschoolQuiz} />
            <Route path="autogenquiz" component={AutoGenQuiz} />
            <Route path="wouldyourather" component={WouldYouRather} />
        </div>
    </Router>
</div>

<style>
    h1,
    p {
        font-family: Nunito;
        color: #6e6e6e;
    }

    p {
        border: 1px solid brown;
        display: inline-block;
        font-size: 1vw;
    }

    img {
        border: 1px solid brown;
        width: 20vw;
    }

    .thumbnail {
        display: inline-block;
        text-align: center;
        border: 1px solid orange;
        margin-top: 50px;
    }

    .thumbnail:hover {
        cursor: pointer;
    }
</style>
