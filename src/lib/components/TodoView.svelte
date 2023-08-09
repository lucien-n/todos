<script lang="ts">
	import type { Todo } from '$lib/types';
	import { createEventDispatcher } from 'svelte';

	export let todo: Todo;

	let editing: boolean = false;

	const dispatch = createEventDispatcher();
</script>

<article id="todo-{todo.id}" class="flex w-full gap-2 rounded border border-black px-3 py-2">
	<div class="flex w-full flex-col gap-2">
		{#if editing}
			<input type="text" class="border-b border-black text-xl font-bold" bind:value={todo.title} />
			<input type="text" class="border-b border-black" bind:value={todo.content} />
		{:else}
			<h1 class="border-b border-white text-xl font-bold">{todo.title}</h1>
			<p class="border-b border-white">{todo.content}</p>
		{/if}
	</div>
	<div class="flex flex-col">
		{#if editing}
			<button
				class=" text-blue-500 underline"
				on:click={() => {
					editing = false;
				}}>Save</button
			>
		{:else}
			<button class=" text-blue-500 underline" on:click={() => (editing = true)}>Edit</button>
		{/if}
		<button class=" text-red-500 underline" on:click={() => dispatch('delete', { id: todo.id })}
			>Delete</button
		>
	</div>
</article>
