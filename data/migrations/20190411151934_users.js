exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    //create boring user - autoincrementing id, username key
    tbl.increments();
    tbl.string("username", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
