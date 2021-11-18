
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        { id: 1, name: 'Josh', skill: 'Tidying chairs', story: 'One time I saw a chair with a bag on it.' },
        { id: 2, name: 'Julianne', skill: 'Cleaning email inboxes', story: 'One time I cleaned my email inbox.' },
        { id: 3, name: 'Tane', skill: 'Reading instructions out loud', story: 'One time I read some instructions out loud.' },
        { id: 4, name: 'Troy', skill: 'Going through airport security', story: 'One time I went through airport security.' }
      ])
    })
}