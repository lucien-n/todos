<script lang="ts">
	import type { Todo } from '$lib/types';
	import { createEventDispatcher } from 'svelte';

	export let todo: Todo;

	const dispatch = createEventDispatcher();
</script>

<article id="todo-{todo.id}" class="flex w-full rounded border border-black px-3 py-2">
	<div class="w-full">
		<h1 class="text-xl font-bold">{todo.title}</h1>
		<p>{todo.content}</p>
	</div>
	<button class=" text-red-500 underline" on:click={() => dispatch('delete', { id: todo.id })}
		>Delete</button
	>
</article>
