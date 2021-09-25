<script context="module">
	export const prerender = true;
</script>

<script>
	import StuffList from '$lib/components/StuffList.svelte';

	const stuffList = [
		{
			name: 'Matematika',
			path: '/math'
		}
	];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="container">
	<div class="text-center text-gray-800 pt-2 pb-16">
		<h1 class="md:text-4xl text-3xl font-semibold mb-6">Built to help you do your works.</h1>
		<p class="md:text-xl text-lg max-w-md mx-auto">
			More than 10+ task resolved by our services in a minute.
		</p>
	</div>

	<StuffList title="Current Stuff" list={stuffList} />
</section>
