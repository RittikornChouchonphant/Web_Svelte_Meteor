<script>
  import Navbar from "./CustomNav.svelte";
  import { Collection } from "../api/Collection";
  import QuestionForm from "./QuestionForm.svelte";
  import "bootstrap/dist/css/bootstrap.min.css";
  import LoginForm from "./LoginForm.svelte";
  import { onMount } from "svelte";
  import CustomNav from "./CustomNav.svelte";

  onMount(async () => {});

  let user = null;
  let questions = [];

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
    <QuestionForm />
  {:else}
    <LoginForm />
  {/if}
</main>
