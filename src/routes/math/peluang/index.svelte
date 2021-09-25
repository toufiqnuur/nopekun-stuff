<script context="module">
	export const prerender = true;
</script>

<script>
	import StuffList from '$lib/components/StuffList.svelte';

	const stuffList = [
		{
			name: 'Kombinasi',
			path: '/math/peluang/kombinasi'
		}
	];
</script>

<svelte:head>
	<title>Peluang</title>
</svelte:head>

<section class="container">
	<StuffList title="Peluang" list={stuffList} />
</section>
