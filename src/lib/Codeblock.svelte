<!-- CodeBlock.svelte -->
<script>
    import { onMount } from 'svelte';
    import hljs from 'highlight.js/lib/core';
    import 'highlight.js/styles/default.css';
    import latex from 'highlight.js/lib/languages/latex';
  
    hljs.registerLanguage('latex', latex);
  
    onMount(() => {
      hljs.highlightAll();
    });
  </script>
  
  <style>
    /* Add any custom styles for your code block here */
  </style>
  
  <pre>
    <code class="language-latex">
      <slot></slot>
    </code>
  </pre>
  