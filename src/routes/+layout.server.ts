import { userFromCookie } from '$lib/common';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const user = userFromCookie(event.cookies);
	return {
		user: user
	};
};
