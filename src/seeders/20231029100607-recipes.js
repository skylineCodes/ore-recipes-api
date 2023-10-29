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
      'recipes',
      [
        {
          id: 1,
          recipe_name: 'Salad',
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          recipe_name: 'Donought',
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          recipe_name: 'Cabbage',
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          recipe_name: 'Butter',
          user_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          recipe_name: 'Ginger',
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          recipe_name: 'Garlic',
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          recipe_name: 'Pepper',
          user_id: 1,
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
    await queryInterface.bulkDelete('recipes', null, {});
  },
};
