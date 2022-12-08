<script lang="ts">

  import { navigating, page } from '$app/stores';
  import { fade } from 'svelte/transition';

  const routes = [
    { to: '/', title: 'Simple usage' },
    { to: '/page-data', title: 'Page data' },
    { to: '/page-server-data', title: 'Page server data' }
  ];
</script>

<svelte:head>
  <title>A simple tRPC-SvelteKit Example Application</title>
</svelte:head>

<header>
  <nav class="container">
    <ul>
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

<main class="container">
  <slot />
</main>

<footer />