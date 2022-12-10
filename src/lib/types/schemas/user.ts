import { UserModel } from '../generated';
export const userCreateInput = UserModel.omit({ id: true, created: true });
export const userUpdateInput = UserModel.omit({ created: true });
