<script>
  import {
    Alert,
    Button,
    Card,
    CardBody,
    CardHeader,
    CardText,
    CardTitle,
  } from "sveltestrap";
  import { Form, FormGroup, Input, Label } from "sveltestrap";
  import Navbar from "./CustomNav.svelte";
  import { Collection } from "../api/Collection";
  import QuestionForm from "./QuestionForm.svelte";
  import "bootstrap/dist/css/bootstrap.min.css";
  import LoginForm from "./LoginForm.svelte";

  let click = 0;
  let user = null;
  let questions = [];

  $m: {
    user = Meteor.user();
    questions = user
      ? Collection.find({}, { sort: { createdAt: -1 } }).fetch()
      : [];
  }

  function handleClick() {
    click = click + 1;
  }
</script>

<main>
  {#if user}
    <Navbar />
    <Form class="m-3">
      <FormGroup>
        <Label for="exampleDate">Date</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />
      </FormGroup>
    </Form>
    <Card class="m-3">
      <CardHeader>
        <CardTitle>Name of quiz taker</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>Loading...</CardText>
      </CardBody>
    </Card>
    <Button color="" on:click={handleClick} class="m-3 btn-outline-primary"
      >Click Me</Button
    >
    <Alert color="info" dismissible class="m-3"
      >You have clicked {click} times!</Alert
    >
    <div class="container">
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
