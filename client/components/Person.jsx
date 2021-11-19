import React from 'react'
import { useParams } from 'react-router'

function Person (props) {
  console.log('Person props: ', props)
  // const id = props.match.params.id
  const id = Number(useParams('id').id)
  console.log('Person id: ', id)
  const person = props.people.find(person => person.id === id)
  console.log('Person person: ', person)
  return (
    <div>
      <h3>{person.name}</h3>
      <h4>{person.skill}</h4>
      <p>{person.story}</p>
    </div>
  )
}

export default Person
