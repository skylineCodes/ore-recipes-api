import { BuildOptions, Model } from 'sequelize';

export interface UserAttributes {
  id?: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  email?: string;
  password?: string;
  dob?: Date;
  address1?: string;
  address2?: string;
  is_verified?: boolean;
  avatar?: string;
  phone_no?: string;
  is_owner?: boolean;
  status?: string;
  meta?: any;
  roles?: any;
  updated_at?: Date;
  created_at?: Date;
  deleted_at?: Date;
}

export const enum UserStatus {
  ACTIVE = 'ACTIVE',
  BLOCKED = 'BLOCKED',
  SUSPENDED = 'SUSPENDED',
}

export interface UserModel extends Model<UserAttributes>, UserAttributes {}

export class User extends Model<UserModel, UserAttributes> {}

export type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserModel;
};
