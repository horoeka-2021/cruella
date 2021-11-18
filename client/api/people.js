import request from 'superagent'

const peopleUrl = '/api/v1/people'

export function getPeople () {
  return request.get(peopleUrl)
    .then((res) => res.body)
}

export function postPerson (person) {
  return request.post(peopleUrl)
    .send(person)
}

export function patchPerson (updatedPerson) {
  return request.patch(peopleUrl)
    .send(updatedPerson)
}

const deepai = require('deepai')

deepai.setApiKey('6137f994-a7fc-45fb-be37-1cdbe4ea10a0')

export function getStory (story) {
  return deepai.callStandardApi('text-generator', {
    text: story
  })
}

// export function getStory (story) {
//   return deepai.callStandarApi('text-generator', {
//     text: story
//   })
//     .then(story => {
//     return story.text
//     })
//   .catch(err => console.error('Lol so random, ', err.message))
// }
