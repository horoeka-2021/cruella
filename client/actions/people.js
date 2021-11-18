import { getPeople, postPerson } from '../api/people.js'

export const FETCH_PEOPLE_PENDING = 'FETCH_PEOPLE_PENDING'
export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS'
export const ADD_PEOPLE_SUCCESS = 'ADD_PEOPLE_SUCCESS'
export const ADD_PEOPLE_PENDING = 'ADD_PEOPLE_PENDING'

// action creater for fetching people pending
export const fetchPeoplePending = () => ({
  type: FETCH_PEOPLE_PENDING
})

// action creater for fetching people success
export const fetchPeopleSuccess = people => ({
  type: FETCH_PEOPLE_SUCCESS,
  people: people
})

// action creater for adding people pending
export const addPeoplePending = () => ({
  type: ADD_PEOPLE_PENDING
})

// action creater for adding people success
export const addPeopleSuccess = () => ({
  type: ADD_PEOPLE_SUCCESS
})

// function that returns a function that dispatches the action
// function for adding a person
export function addPerson (person, history) {
  return dispatch => {
    dispatch(addPeoplePending())
    return postPerson(person)
      .then(() => {
        dispatch(addPeopleSuccess())
        history.push('/')
        return null
      })
      .catch(err => {
        console.error(err.message)
      })
  }
}

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
