<script lang="ts">
    export let language = 'english';
</script>

<div class="flex flex-col gap-1 w-full">
    <label for="language" class="text-xl font-bold">Language</label>
    <select name="language" id="language" class="border-2 p-2 w-96 rounded-md border-sky-600" bind:value={language}>
        <option value="english">English</option>
        <option value="french">French</option>
    </select>
</div>