exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        { name: 'Josh', skill: 'Tidying chairs', story: 'One time I saw a chair with a bag on it.' },
        { name: 'Julianne', skill: 'Cleaning email inboxes', story: 'One time I cleaned my email inbox.' },
        { name: 'Tane', skill: 'Reading instructions out loud in a clear voice', story: 'One time I read some instructions out loud.' },
        { name: 'Troy', skill: 'Going through airport security', story: 'One time I went through airport security.' }
      ])
    })
}
