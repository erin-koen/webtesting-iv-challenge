
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Not  a great'},
        {id: 2, username: 'username'},
        {id: 3, username: 'but whatever'}
      ]);
    });
};
