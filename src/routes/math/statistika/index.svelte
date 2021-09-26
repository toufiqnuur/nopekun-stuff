<script context="module">
	export const prerender = true;
</script>

<script>
	import StuffList from '$lib/components/StuffList.svelte';

	const stuffList = [
		{
			name: 'Range',
			path: '/math/statistika/range'
		},
		{
			name: 'Simpangan Rata-rata',
			path: '/math/statistika/simpangan-rata2'
		}
	];
</script>

<svelte:head>
	<title>Statistika</title>
</svelte:head>

<section class="container">
	<StuffList title="Statistika" list={stuffList} />
</section>
