exports.up = function (knex) {
  return knex.schema.createTable('coffee', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('url')
    table.string('selftext')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('coffee')
}
