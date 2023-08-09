<script lang="ts">
	import type { Todo } from '$lib/types';

	export let todo: Todo;
</script>

<article id="todo-{todo.id}" class="w-full rounded border border-black px-3 py-2">
	<h1 class="text-xl font-bold">{todo.title}</h1>
	<p>{todo.content}</p>
</article>
