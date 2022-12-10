import type { z } from 'zod';
import type { userCreateInput, userUpdateInput } from './schemas/user';

export type User = {
	email: string;
	name: string;
	id: string;
	role: string;
};

export type UserCreate = z.infer<typeof userCreateInput>;
export type UserUpdate = z.infer<typeof userUpdateInput>;
