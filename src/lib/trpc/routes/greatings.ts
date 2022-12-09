import delay from 'delay';
import { t } from '..';

export const greetings = t.router({
	greeting: t.procedure.query(async () => {
		await delay(500); // 👈 simulate an expensive operation
		return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`;
	})
});
