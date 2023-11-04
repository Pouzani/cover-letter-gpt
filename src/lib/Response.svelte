<script lang="ts">
	import type { Message } from 'ai';
	import type { Readable } from 'svelte/store';
	import hljs from 'highlight.js/lib/core';
	import latex from 'highlight.js/lib/languages/latex';
	import { onMount } from 'svelte';

	hljs.registerLanguage('latex', latex);
	export let messages: Readable<Message[]>;
</script>

<pre>
    <code>
	    {#each $messages as message}
			{#if message.role == 'assistant'}
				<li>{message.content}</li>
			{/if}
		{/each}
    </code>
</pre>
