import { userFromCookie } from '$lib/common';
import prisma from '$lib/prisma';
import type { RouterInputs } from '$lib/trpc/routes';
import { invalid, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
export const load: PageServerLoad = ({ cookies }) => {
	const user = userFromCookie(cookies);
	if (user) throw redirect(302, '/profile');
};

export const actions: Actions = {
	// from https://icflorescu.github.io/trpc-sveltekit/authentication
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email') as string;
		const password = data.get('password') as string;
		const payload: RouterInputs['users']['login'] = { email, password };

		const user = await prisma.user.findFirst({
			where: payload,
			select: {
				id: true,
				email: true,
				role: true,
				name: true
			}
		});

		if (user) {
			const value = btoa(JSON.stringify(user));
			cookies.set('jwt', value, { path: '/' });

			throw redirect(307, '/profile');
		} else {
			return invalid(400, { email, incorrect: 'Password or email are incorrect.' });
		}
	}
};
