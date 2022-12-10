import type { Cookies } from '@sveltejs/kit';
import type { User } from './types/types';

export function userFromCookie(cookies: Cookies): User | null {
	const jwt = cookies.get('jwt');
	if (jwt) {
		return JSON.parse(atob(jwt));
	}
	return null;
}
