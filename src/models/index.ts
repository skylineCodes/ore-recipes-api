import * as Sequelize from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];

let sequelize: Sequelize.Sequelize;

sequelize = new Sequelize.Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

import { UsersFactory } from './users';

import { RecipeFactory } from './recipes';

import { RestaurantsFactory } from './restaurants';

export const db = sequelize;

export const Users = UsersFactory(db);

export const Recipe = RecipeFactory(db);

export const Restaurants = RestaurantsFactory(db);


/* ======================== User Relationships ================================= */
Users.hasMany(Recipe, { foreignKey: 'user_id' });
Users.hasMany(Restaurants, { foreignKey: 'user_id' });

/* ======================== Recipe Relationships ================================= */
Recipe.belongsTo(Users, { foreignKey: 'user_id' });

/* ======================== Restaurants Relationships ================================= */
Restaurants.belongsTo(Users, { foreignKey: 'user_id' });
