import { z } from 'zod';
import { t } from '..';
export const loginUserSchema = z.object({
	email: z.string(),
	password: z.string()
});
export const users = t.router({
	login: t.procedure.input(loginUserSchema).mutation(({ input }) => {
		if (input.email == 'a@a.com' && input.password == 'a') {
			return {
				email: 'a@a.com',
				name: 'Augusto Eduardo Torres',
				id: 'a',
				role: 'admin',
				accessToken: 'abcde123456'
			};
		}
		return undefined;
	}),
	isLogged: t.procedure.query(({ ctx }) => {
		return ctx.user ? true : false;
	})
});
