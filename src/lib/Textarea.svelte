<script lang="ts">
	export let input = '';
	export let name = '';
	export let placeholder = '';
	export let id = '';
	export let title = '';
</script>

<div class="flex flex-col w-full gap-1">
	<label for={id} class="text-xl font-bold">{title}</label>
	<textarea class="border-2 resize-none h-72 text-lg rounded-md p-4 border-sky-600" {name} {id} {placeholder} bind:value={input} />
</div>
