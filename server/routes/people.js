const express = require('express')

const db = require('../db/people')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.listPeople()
    .then(people => {
      res.json(people)
      return null
    })
    .catch(err => console.error('These people are highly confidential. No peeking! ', err.message))
})

router.post('/', (req, res) => {
  db.addPerson(req.body)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch(err => {
      console.error('error message: ', err.message)
    })
})

router.patch('/', (req, res) => {
  db.updatePerson(req.body)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(err => console.error('You cannot change my mind! ', err.message))
})
