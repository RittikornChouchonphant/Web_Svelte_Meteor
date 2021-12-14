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
  import Answer from "./Quiz/Answer.svelte";
  import Questions from "./Quiz/Questions.svelte";
  import Score from "./Quiz/Score.svelte";
  
  onMount(async () => {});
  import { Form } from "sveltestrap";
  import Menu from "./Menu.svelte";

  let user = null;

  $m: {
    user = Meteor.user();
    questions = user
      ? Collection.find({}, { sort: { createdAt: -1 } }).fetch()
      : [];
  }

  //Quiz
  let score = 0;
  let currentQuestion = 0;
  const quiz = [];

  function checkAnswer(answerText) {
        const isCorrect = quiz[currentQuestion].answers.indexOf(answerText) === 
        quiz[currentQuestion].correctAnswer;

        if (isCorrect) {
            score += 1;
            quiz[currentQuestion].question = 'Correct!';
            
            document.querySelector('.answers').style.display = 'none';
        }
        else {
            quiz[currentQuestion].question = 'Wrong!';
            
            document.querySelector('.answers').style.display = 'none';
        }
        
        if (currentQuestion < quiz.length - 1) {
            setTimeout(function() {
                currentQuestion += 1;
                
                document.querySelector('.answers').style.display = 'grid';
            }, 2000);
        }
        else {
            setTimeout(() => {
                quiz[currentQuestion].question = `Quiz Finished! 
                    You scored ${score}/${quiz.length} points!`;

                document.querySelector('.answers').style.display = 'none';
            }, 2000);            
        }
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
