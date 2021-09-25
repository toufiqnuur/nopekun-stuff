<script>
	export let title, list;
</script>

<div class="text-gray-800 bg-gray-50 py-16 md:px-20">
	<h2 class="text-center text-2xl md:text-3xl font-semibold mb-6">
		{title}
	</h2>
	<div class="flex flex-wrap space-y-3">
		{#each list as { name, path }}
			<a class="stuff_link" sveltekit:prefetch href={path}>{name}</a>
		{/each}
	</div>
</div>
