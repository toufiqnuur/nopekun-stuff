<script>
	import Header from '$lib/components/Header.svelte';
	import '@fontsource/inter';
	import '../app.css';
</script>

<Header />

<main class="my-14">
	<slot />
</main>
