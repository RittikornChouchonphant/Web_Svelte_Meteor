<script>
  import { Card } from "sveltestrap";
  import Navbar from "./CustomNav.svelte";
  import { Collection } from "../api/Collection";
  import QuestionForm from "./QuestionForm.svelte";
  import "bootstrap/dist/css/bootstrap.min.css";
  import LoginForm from "./LoginForm.svelte";
  import { onMount } from "svelte";
  import Chart from "chart.js";

  onMount(async () => {});

  function renderChart() {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        lebels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Dummy",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [2, 5, 1, 6, 7, 8],
          },
        ],
      },
      options: {
        responsive: true, 
        maintainAspectRatio: false
      },
    });
  }

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
    <Navbar />
    <div class="container">
      <button on:click={renderChart}> View Graph </button>
      <canvas id="myChart" width="40vw"></canvas>
      <QuestionForm />
      <ul class="mt-3">
        {#each questions as question (question._id)}
          <Card body>{question.text}</Card>
        {/each}
      </ul>
    </div>
  {:else}
    <LoginForm />
  {/if}
</main>
