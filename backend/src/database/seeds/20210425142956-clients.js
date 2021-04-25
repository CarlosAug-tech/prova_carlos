module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('clientes', [{}], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('clientes', null, {});
  },
};
