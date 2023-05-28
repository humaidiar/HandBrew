exports.up = function (knex) {
  return knex.schema.createTable('coffee', function (table) {
    table.increments('id').primary()
    table.text('name')
    table.text('url')
    table.text('selftext')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('coffee')
}
