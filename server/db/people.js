const connection = require('./connection')

module.exports = {
  listPeople,
  addPerson,
  deletePerson,
  updatePerson
}

function listPeople (db = connection) {
  return db('people')
    .select()
}

function addPerson (newPerson, db = connection) {
  console.log('db.addPerson called with: newPerson = ', newPerson)
  return db('people')
    .insert(newPerson)
}

function deletePerson (id, db = connection) {
  return db('people')
    .where('id', id)
    .delete()
}

function updatePerson (updatedPerson, db = connection) {
  return db('people')
    .where('id', updatedPerson.id)
    .update(updatedPerson)
}
