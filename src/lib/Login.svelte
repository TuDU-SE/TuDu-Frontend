<script>
  import { element } from "svelte/internal";
  import { post_api_response } from "../call_api";
  import {
    useForm,
    validators,
    HintGroup,
    Hint,
    email,
    required,
  } from "svelte-use-form";

  const form = useForm();

  export let user;
  export let show_login_form;

  function close_login() {
    show_login_form = !show_login_form;
  }

  async function exec_usr_login() {
    const api_response = post_api_response("/api/v1/test/login", user);
    api_response.then((response) => {
      user = response;
      close_login();
    });
  }

  console.log(user);
</script>

<h1>Login</h1>
<p>Please input your credentials</p>

<form id="login_form" use:form>
  <label for="input_email">Name:</label><br />
  <input
    type="email"
    name="email"
    id="email"
    bind:value={user.name}
    use:validators={[required, email]}
  />
  <div class="hint-space">
    <HintGroup for="email">
      <Hint on="required">Please fill out this field!</Hint>
      <Hint on="email">Please fill in a valid email!</Hint>
    </HintGroup>
  </div>

  <label for="input_pwd">Password:</label>
  <input
    type="password"
    name="password"
    id="password"
    bind:value={user.password}
    use:validators={[required]}
  />
  <div class="hint-space">
    <Hint for="password" on="required">Please fill out this field!</Hint>
  </div>
</form>
<button disabled={!$form.valid} on:click={exec_usr_login}>Login</button>

<!-- back-button -->
<button on:click={close_login}>Back</button>

<style>
  form {
    width: 100%;
  }
  input {
    color: #b1b1b1;
    width: auto;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    font-size: 24px;
    align-items: left;
  }
  input[type="email"] {
    width: 100%;
  }
  input[type="password"] {
    width: 100%;
  }
  :global(.touched:invalid) {
    border-color: red;
    outline-color: red;
  }
  .hint-space {
    font-size: 20px;
    color: red;
    align-items: left;
  }
</style>
