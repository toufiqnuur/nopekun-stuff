<script context="module">
	export const prerender = true;
</script>

<script>
	import StuffList from '$lib/components/StuffList.svelte';

	const stuffList = [
		{
			name: 'Statistika',
			path: '/math/statistika'
		},
		{
			name: 'Peluang',
			path: '/math/peluang'
		}
	];
</script>

<svelte:head>
	<title>Matematika</title>
</svelte:head>

<section class="container">
	<StuffList title="Matematika" list={stuffList} />
</section>
