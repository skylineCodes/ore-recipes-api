import 'dotenv/config';

const settings = {
  development: {
    username: 'root',
    password: 'password',
    database: 'orerecipe',
    host: 'localhost',
    replicahost: '',
    dialect: 'mariadb',
    port: '3306',
    seederStorage: 'sequelize',
  },
};

module.exports = settings;
