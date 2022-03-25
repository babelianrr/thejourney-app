'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
      "bookmarks",
      [
        {
          userId: 1,
          journalId: 3,
        },
        {
          userId: 3,
          journalId: 2,
        },
        {
          userId: 4,
          journalId: 3,
        },
        {
          userId: 5,
          journalId: 1,
        },
        {
          userId: 5,
          journalId: 2,
        },
        {
          userId: 5,
          journalId: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
