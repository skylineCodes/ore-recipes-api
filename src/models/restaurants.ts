import { DataTypes, Sequelize } from 'sequelize';
import { RestaurantStatic } from '../types/models/restaurants';

export function RestaurantsFactory(sequelize: Sequelize): RestaurantStatic {
  return <RestaurantStatic>sequelize.define(
    'restaurants',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      restaurant_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      modelName: 'restaurants',
      timestamps: true,
      freezeTableName: true,
      paranoid: true,
      underscored: true,
    }
  );
}
