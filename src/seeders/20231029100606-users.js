'use strict';

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          first_name: 'Larry',
          last_name: 'Claus',
          username: 'claus',
          email: 'larry@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          first_name: 'Salewa',
          last_name: 'Joseph',
          username: 'salmon-jay',
          email: 'salewa@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          first_name: 'Pascal',
          last_name: 'Razene',
          username: 'razene',
          email: 'razene@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          first_name: 'Udoma',
          last_name: 'Stephen',
          username: 'loma',
          email: 'loma@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          first_name: 'Francis',
          last_name: 'Nganou',
          username: 'predator',
          email: 'predator@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          first_name: 'Adesanya',
          last_name: 'Israel',
          username: 'stylebender',
          email: 'stylebender@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          first_name: 'Kamaru',
          last_name: 'Usman',
          username: 'blazer',
          email: 'blazers@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  },
};
