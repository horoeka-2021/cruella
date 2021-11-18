import request from 'superagent'

export function getPeople () {
  return request.get('/api/v1/people')
    .then((res) => res.body)
}
