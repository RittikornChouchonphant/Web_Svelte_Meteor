<script>
  import { Collection } from "../api/Collection";
  import Console from "./Console.svelte";
  import "bootstrap/dist/css/bootstrap.min.css";
  import LoginForm from "./LoginForm.svelte";
  import { onMount } from "svelte";
  import CustomNav from "./CustomNav.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import OldschoolQuiz from "./OldschoolQuiz.svelte";
  import WouldYouRather from "./WouldYouRather.svelte";

  onMount(async () => {});
  import { Form } from "sveltestrap";

  let user = null;
  let questions = [];
  export let url = "";

  $m: {
    user = Meteor.user();
    questions = user
      ? Collection.find({}, { sort: { createdAt: -1 } }).fetch()
      : [];
  }
</script>

<main>
  {#if user}
    <CustomNav />
    <Console />
  {:else}
    <Router {url}>
      <div>
        <Route path="/"><LoginForm /></Route>
      </div>
    </Router>
  {/if}
</main>
