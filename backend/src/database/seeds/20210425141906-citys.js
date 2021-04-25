module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'cidades',
      [
        {
          nome: 'Rio de Janeiro',
          uf: 'RJ',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Rio Grande do Sul',
          uf: 'RS',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'São Paulo',
          uf: 'SP',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Minas Gerais',
          uf: 'MG',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('cidades', null, {});
  },
};
