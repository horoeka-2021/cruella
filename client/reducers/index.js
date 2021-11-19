import { combineReducers } from 'redux'

import people from './people'
import waiting from './waiting'

export default combineReducers({
  people,
  waiting
})
