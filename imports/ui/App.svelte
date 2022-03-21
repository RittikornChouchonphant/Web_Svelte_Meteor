<script>
  import LoginForm from "./LoginForm.svelte";
  import CustomNav from "./CustomNav.svelte";
  import Console from "./Console.svelte";
  import JoinQuizMaster from "./JoinQuizMaster.svelte";
  import QuizEngine from "./QuizEngine.svelte";
  import { Router, Route } from "svelte-routing";
  import "bootstrap/dist/css/bootstrap.min.css";

  let user = null;

  $m: {
    user = Meteor.user();
  }
</script>

<main>
  {#if user}
    <CustomNav />
    <Console />
  {:else}
    <div>
      <Router>
        <Route path="/" component={LoginForm} />
        <Route path="/takequiz/:id" component={JoinQuizMaster} />
        <Route path="/startquiz/:id" component={QuizEngine} />
      </Router>
    </div>
  {/if}
</main>
