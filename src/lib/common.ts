import type { Cookies } from '@sveltejs/kit';

export function userFromCookie(cookies: Cookies) {
	const jwt = cookies.get('jwt');
	if (jwt) {
		return JSON.parse(atob(jwt))
	}
	return null;
}
