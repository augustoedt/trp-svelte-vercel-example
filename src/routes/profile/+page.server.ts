import { userFromCookie } from '$lib/common';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = ({ cookies }) => {
	const user = userFromCookie(cookies);
	if (user == null) throw redirect(302, '/login');
	return {
		user: user
	};
};

export const actions: Actions = {
	logout: async ({ cookies, locals }) => {
		cookies.delete('jwt', { path: '/' });
		locals.user = undefined;
		throw redirect(307, '/');
	}
};
