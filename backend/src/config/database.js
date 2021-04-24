require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'prova_carlos',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
