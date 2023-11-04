<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Codeblock from '$lib/Codeblock.svelte';
	import LanguageSelection from '$lib/LanguageSelection.svelte';
	import Response from '$lib/Response.svelte';
	import Textarea from '$lib/Textarea.svelte';
	import { useChat } from 'ai/svelte';

	let cvInput = '';
	let descriptionInput = '';
	let language = 'english';

	let { messages, handleSubmit, input, isLoading } = useChat({
		api: '/chat'
	});

	$: $input = `${cvInput}\n${descriptionInput}\n in ${language}`;
</script>

<section class="flex flex-col items-center gap-4 my-10">
	<h1 class="font-bold text-3xl text-sky-600">Cover Letter Generator</h1>

	<form on:submit={handleSubmit} class="flex flex-col items-center gap-3 w-2/3">
		{#if $isLoading}
			<p class="text-xl font-bold text-sky-600">Loading...</p>		
		{/if}
			{#each $messages as message}
				{#if message.role == 'assistant'}
					<li>{message.content}</li>
				{/if}
			{/each}
		<Textarea
			name="cv"
			id="cv"
			title="CV"
			placeholder="Paste your cv here (as a text)"
			bind:input={cvInput}
		/>
		<Textarea
			name="description"
			id="description"
			title="Description"
			placeholder="Paste the job description here"
			bind:input={descriptionInput}
		/>
		<LanguageSelection bind:language />
		<Button />
	</form>
</section>
