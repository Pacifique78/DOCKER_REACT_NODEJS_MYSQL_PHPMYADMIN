const env = {
  database: 'users',
  username: 'user',
  password: 'user',
  host: 'database',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = env;
