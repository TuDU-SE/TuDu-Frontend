<script>
  import { Route, Router } from "svelte-navigator";
  import Header from "./lib/Header.svelte";
  import Footer from "./lib/Footer.svelte";
  import TuDu_overview from "./lib/TuDu_Overview.svelte";
  import Landing from "./lib/Landing.svelte";
  import { fade, fly } from "svelte/transition";
  import Login from "./lib/Login.svelte";
  import User from "./lib/User.svelte";

  let show_login_form = false;
  $: user = {
    loggedIn: false,
    name: null,
    login_time: null,
    password: null,
  };
</script>

<Router>
  <div class="outline">
    <Header bind:user bind:show_login_form />
  </div>
  <div class="main">
    <Route path="/main">
      {#if user.loggedIn}
        <div
          id="viewport"
          in:fly={{ x: -500, duration: 750 }}
          out:fly={{ x: 500, duration: 750 }}
        >
          <svelte:component this={TuDu_overview} />
        </div>
      {:else}
        <div
          id="viewport"
          in:fly={{ x: -500, duration: 750 }}
          out:fly={{ x: 500, duration: 750 }}
        >
          <svelte:component this={Login} bind:user bind:show_login_form />
        </div>
      {/if}
    </Route>
    <Route path="/">
      <div
        id="viewport"
        in:fly={{ x: -500, duration: 750 }}
        out:fly={{ x: 500, duration: 750 }}
      >
        <svelte:component this={Landing} />
      </div>
    </Route>
    <Route path="/user/:user">
      <User bind:user />
    </Route>
  </div>
  <div class="outline">
    <footer><Footer /></footer>
  </div>
</Router>

<style>
  .main {
    /* max-width: 75%; */
    justify-content: left;
    place-items: center;
    flex-grow: 1;
    margin: 5px;
  }
  #viewport {
    max-width: fit-content;
  }
</style>
