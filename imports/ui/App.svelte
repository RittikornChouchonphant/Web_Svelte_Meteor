<script>
  import { Card } from "sveltestrap";
  import Navbar from "./CustomNav.svelte";
  import { Collection } from "../api/Collection";
  import QuestionForm from "./QuestionForm.svelte";
  import "bootstrap/dist/css/bootstrap.min.css";
  import LoginForm from "./LoginForm.svelte";
  import { onMount } from "svelte";

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
  <LoginForm />
</main>
