import React from 'react'
import { useDispatch } from 'react-redux'
import { addPerson } from '../actions/people'
import { setWaiting } from '../actions/setWaiting'
import { getStory } from '../api/people'

// import formatPerson from '../utils/formatPerson'

function AddSkill (props) {
  console.log(props)
  const { children, history } = props
  const initialState = { name: '', skill: '', story: '' }
  const [newPerson, setNewPerson] = React.useState(initialState)
  const dispatch = useDispatch()

  function handleSubmit (event) {
    event.preventDefault()

    // original code below uses the function formatPerson, which has a promise call to the random text api.
    // const randomPerson = formatPerson(newPerson)
    // dispatch(addPerson(randomPerson, history))
    // setNewPerson(initialState)

    // new code, basically just bringing the code from formatPerson here.
    const randomStoryPerson = { ...newPerson }
    const storyForRandomizer = `${randomStoryPerson.name} is the best in the world at ${randomStoryPerson.skill} because ${randomStoryPerson.story}`
    dispatch(setWaiting())

    getStory(storyForRandomizer)
      .then(story => {
        randomStoryPerson.story = story.output
        dispatch(addPerson(randomStoryPerson, history))
        return null
      })
      .catch(error => console.error(error.message))
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
      {children}
    </div>
  )
}

export default AddSkill
