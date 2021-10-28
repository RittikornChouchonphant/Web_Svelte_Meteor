<script>
    import { Router, links, Route } from "svelte-routing";
    import Menu from "./Menu.svelte";
    import Profile from "./Profile.svelte";
</script>

<div
    use:links
    style="display: grid; justify-content: center; margin-top: 50px;"
>
    <Router>
        <nav>
            <a href="/menu" replace> Menu </a>
            <a href="/profile" replace> Profile </a>
        </nav>
        <div>
            <Route path="menu" component={Menu} />
            <Route path="profile" component={Profile} />
        </div>
    </Router>
</div>

<svelte:head>
    <link
        href="https://fonts.googleapis.com/css?family=Nunito"
        rel="stylesheet"
    />
</svelte:head>

<style>
    a {
        border: 1px solid blue;
        text-decoration: none;
        background-color: azure;
        color: black;
        font-family: Nunito;
        font-size: 1vw;
        font-weight: 800;
    }

    nav {
        border: 1px solid red;
    }
</style>
