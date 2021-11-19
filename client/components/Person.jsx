import React from 'react'
import { useParams } from 'react-router'

function Person (props) {
  console.log('Person props: ', props)
  // const id = props.match.params.id
  const id = Number(useParams('id').id)
  console.log('Person id: ', id)
  const person = props.people.find(person => person.id === id)
  console.log('Person person: ', person)


  const pictureUrlJPG = `/images/${person.name.toLowerCase()}.jpg`
  const pictureUrlJPEG = `/images/${person.name.toLowerCase()}.jpeg`
  const pictureUrlPNG = `/images/${person.name.toLowerCase()}.png`

  return (
    <div>
      <h1>I am a person</h1>
      <img src={pictureUrlJPG} alt="" />
      <img src={pictureUrlJPEG} alt="" />
      <img src={pictureUrlPNG} alt="" />
      <p>
        I am {person.name} My skill is {person.skill} and my story is {person.story}
      </p>
    </div>
  )
}

export default Person
