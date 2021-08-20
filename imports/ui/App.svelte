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
  import "bootstrap/dist/css/bootstrap.min.css";

  let click = 0;

  function handleClick() {
    click = click + 1;
  }
</script>

<main>
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
      <CardTitle>ผู้ติดเชื้อ</CardTitle>
    </CardHeader>
    <CardBody>
      <CardText>19,548 คน</CardText>
    </CardBody>
  </Card>
  <Button color="primary" on:click={handleClick} class="m-3">Click Me</Button>
  <Alert color="info" dismissible class="m-3"
    >You have clicked {click} times!</Alert
  >
</main>
