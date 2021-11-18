import { getStory } from '../api/people'

// takes in a person object and returns a person object where the person.story has been changed to include the name and skill as well as the original story.
function formatPerson (person) {
  const formattedPerson = { ...person }
  const storyForRandomizer = `${person.name} is the best in the world at ${person.skill} because ${person.story}`

  // call the getStory function to get a story for the person
  getStory(storyForRandomizer)
    .then(story => {
      formattedPerson.story = story.output
      return null
    })
    .catch(error => console.error(error.message))

  console.log(formattedPerson)

  return formattedPerson
}

export default formatPerson
