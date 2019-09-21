const { DB_CONNECTION = 'postgres://localhost:5433/users_ms' } = process.env;
const MAX_CONNECTION_POOLSIZE = 5;

module.exports = {
  client: 'pg',
  connection: DB_CONNECTION,
  pool: { min: 1, max: MAX_CONNECTION_POOLSIZE },
  acquireConnectionTimeout: 5000,
};
