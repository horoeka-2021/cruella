import React from 'react'

function PersonListItem (props) {
  const { name, skill, story } = props.person

  return (
    <div className="person-list-item">
      <p className='name'>{name}</p>
      <p className='skill'>Skill: {skill}</p>
      <p className='story'>Story: {story}</p>
    </div>
  )
}

export default PersonListItem
