<script>
  import LoginForm from "./LoginForm.svelte";
  import JoinQuizMaster from "./JoinQuizMaster.svelte";
  import QuizEngine from "./QuizEngine.svelte";
  import QuizEngineAdmin from "./QuizEngineAdmin.svelte";
  import { Router, Route } from "svelte-routing";
  import "bootstrap/dist/css/bootstrap.min.css";
  import Menu from "./Menu.svelte";
  import CreateQuizMaster from "./CreateQuizMaster.svelte";
  import OldschoolQuiz from "./OldschoolQuiz.svelte";
  import EditOldschoolQuiz from "./EditOldschoolQuiz.svelte";
  import AutoGenQuiz from "./AutoGenQuiz.svelte";

  let user = null;

  $m: {
    user = Meteor.user();
  }
</script>

<main>
  {#if user}
    <Router>
      <Route path="/menu" component={Menu} />
      <Route path="createquiz" component={CreateQuizMaster} />
      <Route path="quiz/:id" component={EditOldschoolQuiz} />
      <Route path="oldschoolquiz" component={OldschoolQuiz} />
      <Route path="autogenquiz" component={AutoGenQuiz} />
      <Route path="/admin/startquiz/:id" component={QuizEngineAdmin} />
    </Router>
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
