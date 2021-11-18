import React, { useState, useEffect } from 'react'

import { getStory } from '../api/people'

function PersonListItem (props) {
  const { name, skill, story } = props.person

  const [generatedOutput, setGeneratedOutput] = useState()

  useEffect(async () => {
    try {
      setGeneratedOutput(await getStory(story))
    } catch (error) {
      console.error(error)
    }
  }, [])

  console.log(generatedOutput)
  return (
    <div className="person-list-item">
      <p className='name'>{name}</p>
      <p className='skill'>Skill: {skill}</p>
      <p className='story'>Story: {generatedOutput?.output}</p>
    </div>
  )
}

export default PersonListItem
