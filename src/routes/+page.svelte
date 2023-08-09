<script lang="ts">
	import TodoCreate from '$lib/components/TodoCreate.svelte';
	import TodoView from '$lib/components/TodoView.svelte';
	import { todos } from '$lib/stores';
	import type { Todo } from '$lib/types';
	import { onMount } from 'svelte';

	onMount(() => {
		$todos = JSON.parse(localStorage.todos) || [];
		todos.subscribe((values) => {
			localStorage.setItem('todos', JSON.stringify(values));
		});
	});

	const createTodo = ({
		detail: { title, content }
	}: {
		detail: { title: string; content: string };
	}) => {
		if (!title) return;

		const todo: Todo = {
			id: Math.floor(Math.random() * 1_000),
			title,
			content,
			checked: false
		};
		$todos = [...$todos, todo];
	};

	const deleteTodo = ({ detail: { id } }: { detail: { id: number } }) => {
		$todos = $todos.filter((todo) => todo.id !== id);
	};
</script>

<section class="flex w-full flex-col gap-y-5">
	<section class="mx-auto flex flex-col gap-3 rounded border border-black px-3 py-2 lg:w-1/2">
		<TodoCreate on:create={createTodo} />
	</section>
	<hr class="mx-auto lg:w-1/2" />
	<section class="mx-auto flex flex-col gap-3 lg:w-1/2">
		{#each $todos as todo}
			<TodoView {todo} on:delete={deleteTodo} />
		{/each}
	</section>
</section>
