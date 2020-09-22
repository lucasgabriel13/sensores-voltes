const knex = require('knex');
const configutation = require('../../knexfile');

const connection = knex(configutation.development);

module.exports = connection;