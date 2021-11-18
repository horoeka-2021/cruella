import React from 'react'

function AddSkill (props) {
  const initialState = { name: '', skill: '', description: '' }
  const [newPerson, setNewPerson] = React.useState(initialState)

  function handleSubmit (event) {
    event.preventDefault()
    console.log('AddSkill: handleSubmit')
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
      <label htmlFor='skill'>Country:</label>
      <input name='skill' type='text' value={newPerson.skill} onChange={(e) => handleChange(e)} />
      <label htmlFor='discription'>Discription:</label>
      <input name='description' type='text' value={newPerson.description} onChange={(e) => handleChange(e)} />
      <button type='submit' onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default AddSkill
