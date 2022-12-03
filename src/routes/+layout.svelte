<script>
    import logo from '/src/assets/vite.svg';
    import { user } from '$app/stores';
    
</script>

<svelte:head>
    <title>{$user.data.title}</title>
</svelte:head>

<div class="header">
    <p>TuDu - Task Manager <img alt="Place our logo here" src={logo}></p>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/settings">Settings</a>
        { #if user.loggedIn }
        <a href="/account">Account</a>
        { :else }
        <a href="/sign_in">Sign In</a>
        <a href="/sign_up">Sign Up</a>
        { /if }
    </nav>
</div>

<slot />

<div class="footer">
    <p>This is the footer!</p>
</div>