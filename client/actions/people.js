import { getPeople } from '../api/people.js'

export const FETCH_PEOPLE_PENDING = 'FETCH_PEOPLE_PENDING'
export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS'

// action creater for fetching people pending
export const fetchPeoplePending = () => ({
  type: FETCH_PEOPLE_PENDING
})

// action creater for fetching people success
export const fetchPeopleSuccess = people => ({
  type: FETCH_PEOPLE_SUCCESS,
  people
})

// function that returns a function that dispatches the action
export function fetchPeople () {
  return dispatch => {
    dispatch(fetchPeoplePending())
    return getPeople()
      .then((people) => {
        dispatch(fetchPeopleSuccess(people))
        return null
      })
      .catch((err) => {
        console.error(err)
      })
  }
}
