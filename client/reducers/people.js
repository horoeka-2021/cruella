import { FETCH_PEOPLE_SUCCESS } from '../actions/people'

const intialPeopleState = ['tane']

function people (state = intialPeopleState, action) {
  switch (action.type) {
    case FETCH_PEOPLE_SUCCESS:
      return action.people
    default:
      return state
  }
}

export default people
