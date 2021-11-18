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
      <h1>I am a person</h1>
      <p>
        I am {person.name} My skill is {person.skill} and my story is {person.story}
      </p>
    </div>
  )
}

export default Person
