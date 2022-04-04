<script>
    import { Meteor } from "meteor/meteor";
    import { navigate } from "svelte-routing";

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
            <h2>Auto Gen Quiz</h2>
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
    <div>Henlo</div>
</div>

<style>
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
</style>
