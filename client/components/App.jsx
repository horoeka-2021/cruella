import React from 'react'
import { Route } from 'react-router-dom'

// import other components:
import Header from './Header'

function App () {
  return (
    <div className='app'>
      <Route path='/' component={Header} />
    </div>
  )
}

export default App
