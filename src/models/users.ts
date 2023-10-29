import { DataTypes, Sequelize } from 'sequelize';
import { UserStatic } from '../types/models/users';

export function UsersFactory(sequelize: Sequelize): UserStatic {
  return <UserStatic>sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      modelName: 'users',
      timestamps: true,
      freezeTableName: true,
      paranoid: true,
      underscored: true,
    }
  );
}
