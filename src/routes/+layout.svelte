<script lang="ts">
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import './style.css';

	// data
	import { user } from '../store';

	$user.name = 'User';

	let show_login_form = false;
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>