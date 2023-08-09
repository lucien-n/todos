<script lang="ts">
	import type { Todo } from '$lib/types';
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	export let todo: Todo;

	let editing: boolean = false;

	const dispatch = createEventDispatcher();

	const toggleEditing = (): void => {
		editing = !editing;
	};

	const toggleChecked = (): void => {
		todo.checked = !todo.checked;
	};
</script>

<article
	in:fly={{ x: -200, duration: 150 }}
	out:fly={{ x: 200, duration: 150 }}
	id="todo-{todo.id}"
	class="flex w-full gap-3 rounded border border-black px-3 py-2"
>
	<div class="flex w-full flex-col gap-2">
		{#if editing}
			<input type="text" class="border-b border-black text-xl font-bold" bind:value={todo.title} />
			<textarea rows="2" class="border-b border-black" bind:value={todo.content} />
		{:else}
			<h1 class="border-b border-white text-xl font-bold" class:checked={todo.checked}>
				{todo.title}
			</h1>
			<p class="border-b border-white" class:checked={todo.checked} aria-disabled={todo.checked}>
				{todo.content}
			</p>
		{/if}
	</div>
	<div class="flex flex-col justify-center">
		{#if todo.checked}
			<button class="text-gray underline" on:click={toggleChecked}>Uncheck</button>
		{:else}
			{#if editing}
				<button
					class=" text-blue-500 underline"
					on:click={() => {
						editing = false;
					}}>Save</button
				>
			{:else}
				<button class=" text-blue-500 underline" on:click={toggleEditing}>Edit</button>
			{/if}
			<button class=" text-red-500 underline" on:click={() => dispatch('delete', { id: todo.id })}
				>Delete</button
			>
			<button class="text-green-500 underline" on:click={toggleChecked}>Check</button>
		{/if}
	</div>
</article>

<style lang="postcss">
	.checked {
		@apply italic text-zinc-700 line-through;
	}
</style>
