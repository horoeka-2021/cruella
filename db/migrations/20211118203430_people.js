
exports.up = function(knex) {
    return knex.schema.createTable('people', table => {
        table.increments('id')
        table.string('name')
        table.string('skill')
        table.string('story')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('products')
};
