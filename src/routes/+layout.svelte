<script lang="ts">
	import { navigating, page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
	const routes = [
		{ to: '/', title: 'Simple usage' },
		{ to: '/page-data', title: 'Page data' },
		{ to: '/page-server-data', title: 'Page server data' },
		{ to: '/login', title: 'Login' },
		{ to: '/profile', title: 'Profile' }
	];
</script>

<svelte:head>
	<title>A simple tRPC-SvelteKit Example Application</title>
</svelte:head>

<header>
	<nav>
		{#if data.user != undefined} <div>{data.user.name}</div>{/if}
		<ul class="nav-bar">
			{#each routes as { to, title } (to)}
				<li><a class:active={$page.url.pathname === to} href={to}>{title}</a></li>
			{/each}
		</ul>
	</nav>
	<div class="navigation-status">
		{#if $navigating}
			<sub aria-busy="true" transition:fade={{ duration: 100 }}>Navigating...</sub>
		{/if}
	</div>
</header>

<main>
	<slot />
</main>

<footer />

<style>
	.nav-bar {
		display: flex;
		list-style: none;
		gap: 0.5rem;
	}
</style>
