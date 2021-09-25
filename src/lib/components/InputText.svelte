<script>
	export let label, placeholder, onChange;
</script>

<div class="box-input">
	<input
		on:keydown={(e) => (e.keyCode === 13 ? e.target.blur() : 0)}
		on:change={(e) => onChange(e)}
		{placeholder}
		class="input-val"
		type="text"
	/>
	<label>{label}</label>
</div>

<style>
	.box-input {
		@apply flex flex-col my-4;
	}
	.input-val {
		@apply order-2 text-gray-600;
		@apply rounded px-4 py-2;
		@apply ring ring-gray-300;
	}
	.input-val:focus {
		@apply outline-none ring-2 ring-blue-500;
	}
	.input-val + label {
		@apply order-1 mb-1;
		@apply order-1 text-sm text-gray-400;
	}
	.input-val:focus + label {
		@apply text-blue-500;
	}
</style>
