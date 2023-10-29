import { BuildOptions, Model } from 'sequelize';

export interface RecipeAttributes {
  id?: number;
  recipe_name?: string;
  user_id?: number;
  updated_at?: Date;
  created_at?: Date;
  deleted_at?: Date;
}

export const enum RecipeStatus {
  ACTIVE = 'ACTIVE',
  BLOCKED = 'BLOCKED',
  SUSPENDED = 'SUSPENDED',
}

export interface RecipeModel extends Model<RecipeAttributes>, RecipeAttributes {}

export class Recipe extends Model<RecipeModel, RecipeAttributes> {}

export type RecipeStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): RecipeModel;
};
