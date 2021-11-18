import React from 'react'
import { useDispatch } from 'react-redux'
import { addPerson } from '../actions/people'

import formatPerson from '../utils/formatPerson'

function AddSkill (props) {
  const { history } = props
  const initialState = { name: '', skill: '', story: '' }
  const [newPerson, setNewPerson] = React.useState(initialState)
  const dispatch = useDispatch()

  function handleSubmit (event) {
    event.preventDefault()
    const randomPerson = formatPerson(newPerson)
    // dispatch(addPerson(newPerson, history))
    dispatch(addPerson(randomPerson, history))
    setNewPerson(initialState)
  }

  function handleChange (event) {
    setNewPerson({
      ...newPerson,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div>
      <h3>Add your world&apos;s best skill</h3>
      <label htmlFor='name'>Name:</label>
      <input name='name' type='text' value={newPerson.name} onChange={(e) => handleChange(e)} />
      <label htmlFor='skill'>skill:</label>
      <input name='skill' type='text' value={newPerson.skill} onChange={(e) => handleChange(e)} />
      <label htmlFor='story'>story:</label>
      <input name='story' type='text' value={newPerson.story} onChange={(e) => handleChange(e)} />
      <button type='submit' onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default AddSkill
