<script lang="ts">
	import TodoView from '$lib/components/TodoView.svelte';
	import { todos } from '$lib/stores';
	import type { Todo } from '$lib/types';
	import { onMount } from 'svelte';

	let title: string = '';
	let content: string = '';

	onMount(() => {
		$todos = JSON.parse(localStorage.todos) || [];
		todos.subscribe((values) => {
			localStorage.setItem('todos', JSON.stringify(values));
		});
	});

	const createTodo = () => {
		if (!title) return;

		const todo: Todo = {
			id: Math.floor(Math.random() * 1_000),
			title,
			content
		};
		$todos = [...$todos, todo];
	};

	const deleteTodo = ({ detail: { id } }: { detail: { id: number } }) => {
		$todos = $todos.filter((todo) => todo.id !== id);
	};
</script>

<section class="flex w-full flex-col gap-y-5">
	<section class="mx-auto flex flex-col gap-3 rounded border border-black px-3 py-2 lg:w-1/2">
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
	</section>
	<hr class="mx-auto lg:w-1/2" />
	<section class="mx-auto flex flex-col gap-3 lg:w-1/2">
		{#each $todos.reverse() as todo}
			<TodoView {todo} on:delete={deleteTodo} />
		{/each}
	</section>
</section>
