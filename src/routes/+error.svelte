<script lang="ts">
    import { page } from '$app/stores';
</script>

<h1>Error</h1>

<p>Something went wrong. Try the <a href="/">landing page</a> or contact an Admin.</p>

<h4>Error message:</h4>
<p class="error">{$page.error?.message}</p>
