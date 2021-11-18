import { FETCH_PEOPLE_SUCCESS } from '../actions/people'

function people (state = [], action) {
  switch (action.type) {
    case FETCH_PEOPLE_SUCCESS:
      return action.people
    default:
      return state
  }
}

export default people
