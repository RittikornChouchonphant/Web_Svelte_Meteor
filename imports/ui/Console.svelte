<script>
    import { Router, links, Route } from "svelte-routing";
    import Menu from "./Menu.svelte";
    import CreateQuizMaster from "./CreateQuizMaster.svelte";
    import OldschoolQuiz from "./OldschoolQuiz.svelte";
    import WouldYouRather from "./WouldYouRather.svelte";

    let user = null;

    $m: {
        user = Meteor.user();
    }
</script>

<div use:links class="masterpage">
    <Router>
        <div class="sidebar">
            <nav>
                <a href="/menu" style="margin-top: 10px;">
                    <img
                        src="/assets/icons/DashboardLogoActive.svg"
                        alt="DashboardLogo"
                        style="margin-right: 10px;"
                    />
                    {user.username}
                </a>
                <a href="/createquiz"> Create New Quiz </a>
            </nav>
        </div>
        <div class="mastercontent">
            <Route path="menu" component={Menu} />
            <Route path="createquiz" component={CreateQuizMaster} />
            <Route path="oldschoolquiz" component={OldschoolQuiz} />
            <Route path="wouldyourather" component={WouldYouRather} />
        </div>
    </Router>
</div>

<svelte:head>
    <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<style>
    a {
        border: none;
        padding: 10px 0px 10px 20px;
        display: flex;
        justify-content: left;
        text-decoration: none;
        background-color: #ffffff;
        color: #8d89ee;
        font-family: Nunito;
        font-size: 1.1vw;
        font-weight: 900;
    }

    a:focus {
        background-color: #eff0ff;
    }

    a:hover {
        color: #8d89ee;
    }

    nav {
        border: none;
    }

    .sidebar {
        height: 94vh;
        background-color: #ffffff;
    }

    .masterpage {
        background-color: #f7f7ff;
        display: grid;
        grid-template-columns: 12% auto;
    }

    .mastercontent {
        padding: 20px 30px 20px 30px;
    }
</style>
