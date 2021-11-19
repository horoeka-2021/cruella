import React from 'react'
import { Route } from 'react-router-dom'

// import other components:
import Header from './Header'
import PeopleList from './PeopleList'
import WaitIndicator from './WaitIndicator'
import AddSkill from './AddSkill'
import Person from './Person'
import { useSelector } from 'react-redux'

function App () {
  const people = useSelector(state => state.people)
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
      <Route path='/people/:id' render={({ history, match }) => {
        return <Person history={history} people={people} >
          <WaitIndicator />
        </Person>
      }} />
    </div>
  )
}

export default App
