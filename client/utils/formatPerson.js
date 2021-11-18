// import { randomizerpi } from '../api/random?'

// takes in a person object and returns a person object where the person.story has been changed to include the name and skill as well as the original story.
function formatPerson (person) {
  const formattedPerson = { ...person }
  const storyForRandomizer = `${person.name} is the best in the world at ${person.skill} because ${person.story}`

  // call api to get random story
  // const randomStory = randomizerApi.getRandomStory(storyForRandomizer)
  const randomStory = storyForRandomizer

  formattedPerson.story = randomStory

  return formattedPerson
}

export default formatPerson
