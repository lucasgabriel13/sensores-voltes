
exports.up = function(knex) {
    return knex.schema.createTable('register', function(table){
        table.increments();
        table.integer('umidade').notNullable();
        table.integer('temperatura').notNullable();
        table.timestamp('date').notNullable().defaultTo(knex.fn.now());
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('register');
};
