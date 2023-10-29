import { BuildOptions, Model } from 'sequelize';

export interface RestaurantAttributes {
  id?: number;
  restaurant_name?: string;
  user_id?: number;
  updated_at?: Date;
  created_at?: Date;
  deleted_at?: Date;
}

export const enum RestaurantStatus {
  ACTIVE = 'ACTIVE',
  BLOCKED = 'BLOCKED',
  SUSPENDED = 'SUSPENDED',
}

export interface RestaurantModel extends Model<RestaurantAttributes>, RestaurantAttributes {}

export class Restaurant extends Model<RestaurantModel, RestaurantAttributes> {}

export type RestaurantStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): RestaurantModel;
};
