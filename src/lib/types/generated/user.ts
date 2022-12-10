import * as z from 'zod';

export const UserModel = z.object({
	id: z.string(),
	email: z.string().email({ message: 'Endereço de email inválido' }),
	password: z.string().min(5, { message: 'Mínimo de 5 caractéres' }),
	role: z.string(),
	name: z.string().min(5, { message: 'Mínimo de 5 caractéres' }),
	created: z.date()
});
