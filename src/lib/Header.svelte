<script>
  // imports

  import { Link } from "svelte-navigator";

  // parameters
  export let user;
  export let show_login_form;

  function logout() {
    console.log("LOGOUT");
    user = {
      loggedIn: false,
      name: null,
      login_time: null,
      password: null,
    };
    // show_login_form = !show_login_form;

    // TODO: delete cookies and jwt and all the other local user stuff
  }
  $: console.log(
    `user.loggedIn: ${user.loggedIn}, show_login_form: ${show_login_form}`
  );
</script>
<nav>
  <Link to="/">Landing</Link>
  <Link to="/main">Main</Link>
  <Link to="/user/:user">{user.name}</Link>
</nav>

<!-- <p>
  User is {#if !user.loggedIn} not {/if} logged in
</p>
<div class="button_group">
  {#if !user.loggedIn}
    <button on:click={show_login}> Login </button>
    <button on:click={register}> Register </button>
  {:else}
    <p>Hello, {user.name}</p>
    <button on:click={logout}> Logout </button>
  {/if}
</div> -->

<style>
  /* .button_group {
    margin: 5px;
  } */
</style>
