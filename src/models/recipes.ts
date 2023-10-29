import { DataTypes, Sequelize } from 'sequelize';
import { RecipeStatic } from '../types/models/recipes';

export function RecipeFactory(sequelize: Sequelize): RecipeStatic {
  return <RecipeStatic>sequelize.define(
    'recipes',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      recipe_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      modelName: 'recipes',
      timestamps: true,
      freezeTableName: true,
      paranoid: true,
      underscored: true,
    }
  );
}
