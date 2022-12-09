<script>
  import { Route, Router } from "svelte-navigator";
  import Header from "./lib/Header.svelte";
  import Footer from "./lib/Footer.svelte";
  import TuDu_overview from "./lib/TuDu_Overview.svelte";

  
  $: user = {
    loggedIn: false,
    name: null,
    login_time: null,
    password: null,
  };
</script>

<Router>
  <main>
    <div class="outline" id="header">
      <Header bind:user />
    </div>
    <p>
      User is {#if !user.loggedIn} not {/if} logged in
    </p>

    <div id="sidebar" />

    <div class="main">
      {#if user.loggedIn} 
        <TuDu_overview />
      {/if}
    </div>

    <div class="outline" id="footer">
      <footer><Footer /></footer>
    </div>
  </main>
</Router>

<style>
  .main {
    /* max-width: 75%; */
    justify-content: left;
    place-items: center;
    flex:1;
  }

  #footer {
    
  }
</style>
