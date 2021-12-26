<script>
    import GoogleFormStyle from "../ui/group/GoogleFormStyle.svelte";
    import { Meteor } from "meteor/meteor";

    let user = null;
    $m: {
        user = Meteor.user();
    }
</script>

<div>
    <h1>Welcome back, {user.username}</h1>
    <GoogleFormStyle />
    <p>Make sure to validate your e-mail at {user.emails[0].address}.</p>
</div>

<style>
    h1 {
        font-family: Nunito;
        color: #6e6e6e;
    }
</style>
