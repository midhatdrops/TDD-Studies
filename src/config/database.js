module.exports = {
  host: '127.0.0.1',
  username: 'postgres',
  password: '1234',
  database: 'nodeauth',
  dialect: 'postgres',
  storage: '../database/database.sqlite',
  operatorAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
