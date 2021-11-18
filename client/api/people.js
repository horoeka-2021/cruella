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
