<script>
  import LoginForm from "./LoginForm.svelte";
  import CustomNav from "./CustomNav.svelte";
  import Console from "./Console.svelte";
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
    <LoginForm />
  {/if}
</main>
