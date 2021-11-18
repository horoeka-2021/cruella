import React from 'react'
import { Route } from 'react-router-dom'

// import other components:
import Header from './Header'
import PeopleList from './PeopleList'
import WaitIndicator from './WaitIndicator'

function App () {
  return (
    <div className='app'>
      <Route path='/' component={Header} />
      <Route exact path='/' render={({ history }) => {
        return <PeopleList history={history} >
          <WaitIndicator />
        </PeopleList>
      }} />
    </div>
  )
}

export default App
