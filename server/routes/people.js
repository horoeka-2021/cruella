const express = require('express')

const db = require('../../db/people')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => [
  db.listPeople()
    .then(people => {
      res.json(people)
      return null
    })
    .catch(err => console.error('These people are highly confidential. No peeking! ', err.message))
])
