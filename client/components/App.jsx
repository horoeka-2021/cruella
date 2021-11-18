import React from 'react'
import { Route } from 'react-router-dom'

// import other components:
import Header from './Header'
import PeopleList from './PeopleList'
import WaitIndicator from './WaitIndicator'
import AddSkill from './AddSkill'

function App () {
  return (
    <div className='app'>
      <Route path='/' component={Header} />
      <Route exact path='/' render={({ history }) => {
        return <PeopleList history={history} >
          <WaitIndicator />
        </PeopleList>
      }} />
      <Route path='/addskill' render={({ history }) => {
        return <AddSkill history={history} >
          <WaitIndicator />
        </AddSkill>
      }} />
    </div>
  )
}

export default App
