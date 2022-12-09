import { t } from '..';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';

import { greetings } from './greatings';
import { users } from './user';

export const router = t.router({
	users,
	greetings
});

export type Router = typeof router;
export type RouterInputs = inferRouterInputs<Router>;
export type RouterOutputs = inferRouterOutputs<Router>;
