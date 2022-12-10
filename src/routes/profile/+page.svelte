<script lang="ts">
	import { enhance } from '$app/forms';
	import { writable } from 'svelte/store';
	import type { ActionData, PageData } from './$types';
	export let data: PageData;
	let disableMode = true;

	let input = writable({ ...data.user });
	export let form: ActionData;
</script>

<h1>PROFILE PAGE</h1>

<p>Welcome {data.user.name}!</p>
<button on:click={() => (disableMode = !disableMode)}>Edit</button>
<p>
	{#if form?.success}Login Check Ok{/if}
</p>
<form use:enhance method="GET" action="?/update">
	<div>
		<label for="email">Email</label>
		<input disabled={disableMode} name="email" type="text" bind:value={$input.email} />
	</div>
	<div>
		<label for="name">Name</label>
		<input disabled={disableMode} name="name" type="text" bind:value={$input.name} />
	</div>
	<button type="submit">Editar</button>
</form>

<form use:enhance method="POST" action="?/logout">
	<button class="btn btn-outline-danger">Logout</button>
</form>
