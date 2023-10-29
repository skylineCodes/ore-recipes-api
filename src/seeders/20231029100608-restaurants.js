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
      'restaurants',
      [
        {
          id: 1,
          restaurant_name: 'Diamonds Restaurant',
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          restaurant_name: 'Food & Drinks Hub',
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          restaurant_name: 'Late Night Lounge',
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          restaurant_name: 'Coleslaw Restaurant',
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          restaurant_name: 'Wine & Dine Restaurant',
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          restaurant_name: 'Dance & Merry Restaurant',
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          restaurant_name: 'White Lane Restaurant',
          user_id: 3,
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
    await queryInterface.bulkDelete('restaurants', null, {});
  },
};
