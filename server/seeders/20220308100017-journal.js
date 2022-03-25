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
      "journals",
      [
        {
          title: "My First Visit to Bali",
          image: "dewata.png",
          userId: 1,
          description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis error, quam voluptatibus iste dolorum molestiae quis natus eos repudiandae, omnis totam alias iusto quidem perspiciatis temporibus facere rem voluptatem. Id in numquam repudiandae nobis nostrum tempore nemo cupiditate ullam adipisci consectetur, ipsum placeat sint, ad sequi itaque iure eaque possimus esse labore similique! Deleniti maiores velit atque iste earum, sint neque quod delectus, sunt fuga reprehenderit nostrum sequi sapiente eligendi illum exercitationem repellat quasi incidunt blanditiis assumenda! Cumque qui iste illum blanditiis, eligendi earum fuga tenetur sed unde iure vel. Harum suscipit tempore inventore commodi. Odio, repellat. Fugit rem nam praesentium repudiandae blanditiis minus. Inventore culpa placeat rerum veniam libero.</p>",
        },
        {
          title: "Lockdown in London",
          image: "london.png",
          userId: 5,
          description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laboriosam minus voluptatum! Animi iusto magnam repudiandae a, amet fuga impedit nisi consectetur ipsa eveniet dolores corporis quibusdam temporibus quidem iste reiciendis neque facilis distinctio aliquid ea. Veritatis suscipit velit maxime optio architecto reprehenderit, impedit, recusandae libero odit eos quasi atque earum excepturi voluptas minus dolores cum debitis nemo in aspernatur sint? Dignissimos vitae doloribus cumque atque tempore. Natus autem repudiandae error cumque delectus, quasi et ipsa reiciendis soluta aliquam pariatur, commodi, ipsum magnam nobis ex sit asperiores?</p>",
        },
        {
          title: "Honeymoon in Sydney",
          image: "cheers.png",
          userId: 2,
          description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis molestiae ex laborum a rem iusto nostrum labore neque. Dolorem iusto dolores temporibus praesentium quas eligendi sed voluptatem similique adipisci ad in, veniam aliquid, a placeat quae error sapiente sequi quisquam tempore fuga! Nam nisi necessitatibus maiores commodi corporis reiciendis ipsa autem odit consequuntur, illo molestiae modi explicabo earum a aliquam cum at veniam! Labore minus dolorem ullam ratione quam id dicta quasi dolore accusantium odio accusamus quisquam illo nulla aperiam quas, maxime quibusdam. Maiores aspernatur labore cumque vel ea perferendis exercitationem! Inventore, modi id! Asperiores commodi eius provident nulla? Earum accusamus quam inventore harum aperiam voluptas, neque minus fugit numquam eius suscipit quis odit hic, nam iure, assumenda possimus sint a eos nostrum? Perferendis asperiores placeat ullam eligendi itaque obcaecati.</p>",
        },
        {
          title: "Romantic Valentine Day",
          image: "paris.png",
          userId: 3,
          description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatibus veritatis cupiditate. Repellendus numquam, magni pariatur aperiam neque odio cupiditate, voluptas alias aut impedit nihil facere quibusdam rerum voluptates officia commodi maiores vel accusantium, et quis laboriosam tempore sunt veniam molestias. Unde sunt quis ab et, quibusdam amet in dolorem ad tempora numquam dolor dicta explicabo hic officia sed corporis neque est voluptas quaerat porro dolores earum laudantium cum placeat? Iure, voluptate corrupti. Officiis laudantium obcaecati reprehenderit facere nemo quae incidunt dolorem eos, magni cupiditate vel nam harum ipsum soluta fugiat doloribus doloremque voluptatibus exercitationem minima necessitatibus? Non, totam sit.</p>",
        },
        {
          title: "The Friendly Lifeguard",
          image: "beachguy.png",
          userId: 4,
          description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, eligendi? Esse similique exercitationem porro ipsum minima eos soluta facilis quibusdam sequi hic beatae odio, laborum odit nulla ab cupiditate fugiat pariatur magnam harum qui assumenda nihil temporibus modi. Illum corrupti quia, dicta unde quas aliquid velit impedit alias? Nostrum quae corporis asperiores ducimus dolore, odit rerum soluta possimus dignissimos iste atque eos fuga magni, culpa mollitia? Omnis ipsa aliquid dolore aspernatur aliquam nostrum nemo. Quo pariatur explicabo quibusdam soluta nisi expedita recusandae nam tempora aliquam corporis aperiam, labore vero, doloribus dolore minima fuga! Non id ea molestias velit beatae maxime!</p>",
        },
        {
          title: "The Beauty of Belitung Island",
          image: "diving.png",
          userId: 6,
          description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magni quasi amet hic sit mollitia nesciunt aliquam doloribus voluptatum eius quas omnis, et ad non voluptatibus ut deleniti totam voluptate sapiente ipsa, tempora alias aspernatur soluta. Accusantium voluptas perferendis culpa laboriosam deserunt asperiores natus veniam. Officiis, inventore nisi. Aperiam ipsa, nisi accusamus non alias, ab adipisci, dolores qui sapiente est velit temporibus itaque. Pariatur repellendus nemo nam quasi earum vel animi maxime in magnam? Voluptate facilis nihil autem enim officia, quis ab fugiat veritatis, hic quos saepe necessitatibus!</p>",
        },
        {
          title: "The Story of Homesick Girl",
          image: "lonely.png",
          userId: 2,
          description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis animi sapiente quas? Nesciunt inventore pariatur eos qui, dignissimos iure velit voluptas numquam consectetur assumenda nobis eius perspiciatis excepturi quas repudiandae, ipsam vitae suscipit. Voluptatem, itaque excepturi! Harum fugit molestias itaque eaque nisi voluptatum officia aut possimus nihil quae. Magnam architecto voluptas dolor atque eius voluptatum, error sapiente ex perferendis officia magni minima, suscipit doloremque ad nisi. Cumque laudantium inventore esse molestiae maiores enim nisi molestias rem libero velit sint atque suscipit maxime, minima quibusdam vel nam, veritatis nostrum placeat quasi? Natus laudantium illo necessitatibus, nemo voluptates dolore! Soluta velit fuga perspiciatis eveniet, itaque aut voluptatem provident illum quae inventore a repellendus corporis quo vitae nihil minus hic quam. Repellendus, fuga.</p>",
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
