<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let title: string = '';
	let content: string = '';

	const createTodo = (): void => {
		dispatch('create', { title, content });
	};
</script>

<section class="flex flex-col">
	<label for="todo-title">Title</label>
	<input
		type="text"
		name="title"
		id="title"
		class="rounded border border-black px-2 py-1"
		required
		maxlength="80"
		bind:value={title}
	/>
</section>
<section class="flex flex-col">
	<label for="todo-content">Content</label>
	<textarea
		name="content"
		id="content"
		cols="30"
		rows="2"
		class="rounded border border-black px-2 py-1"
		required
		maxlength="300"
		bind:value={content}
	/>
</section>
<button
	class="rounded border border-black px-3 py-2 outline-black hover:bg-zinc-100 active:bg-zinc-200"
	on:click={createTodo}>Create</button
>
