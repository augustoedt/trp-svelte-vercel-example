import { router } from '$lib/trpc/routes';
import { createContext } from '$lib/trpc/context';
import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';

export const handle: Handle = createTRPCHandle({ router, createContext });
