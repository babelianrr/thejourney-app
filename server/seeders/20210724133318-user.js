"use strict";

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
      "users",
      [
        {
          name: "Dani Santoso",
          email: "danists0@tbc.net",
          password:
            "$2b$10$7ovHDrtaMe.FmutXxEhnWOo7rDOdTloUMgqms5RXYmL5/4dfM.OTm", //123456
          phone: "089678901234",
          address: "Jl. Protokol No. 98C, Lenteng Agung, Jakarta Pusat",
        },
        {
          name: "Ery Sugajima",
          email: "erysugajimaaa@tbc.net",
          password:
            "$2b$10$7ovHDrtaMe.FmutXxEhnWOo7rDOdTloUMgqms5RXYmL5/4dfM.OTm", //123456
          phone: "081890123456",
          address: "Jl. Raya Glodok No. 114 Lt. 8, Glodok, Jakarta Pusat",
        },
        {
          name: "Farrel Arumski",
          email: "farumski@tbc.net",
          password:
            "$2b$10$7ovHDrtaMe.FmutXxEhnWOo7rDOdTloUMgqms5RXYmL5/4dfM.OTm", //123456
          phone: "089765432109",
          address: "Jl. Raya Citra Boulevard No. 6C, Cikupa, Tangerang",
        },
        {
          name: "Gary Haryono",
          email: "garyhjkl@tbc.net",
          password:
            "$2b$10$7ovHDrtaMe.FmutXxEhnWOo7rDOdTloUMgqms5RXYmL5/4dfM.OTm", //123456
          phone: "082109876543",
          address: "Anwa Residende Kav. 18, Jl. Raya Jurangmangu, Ciputat, Tangerang Selatan",
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
  },
};
