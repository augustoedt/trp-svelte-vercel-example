import { userFromCookie } from '$lib/common';
import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/routes';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = ({ cookies }) => {
	const user = userFromCookie(cookies);
	if (!user) throw redirect(302, '/login');
	return {
		user: user
	};
};

export const actions: Actions = {
	logout: async (event) => {
		event.cookies.delete('jwt', { path: '/' });
		event.locals.user = undefined;
		throw redirect(307, '/');
	},
	update: async (event) => {
		const islogged = await router.createCaller(await createContext(event)).users.isLogged();
		console.log(islogged);
		return { success: islogged };
	}
};
