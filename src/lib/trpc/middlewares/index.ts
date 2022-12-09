import { t } from '..';

export const isLoggedMiddleware = t.middleware(async ({ ctx, next }) => {
	return next({
		ctx: {
			user: ctx.user
		}
	});
});
