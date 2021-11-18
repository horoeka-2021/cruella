import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <>
      <h1 className='welcome'>
        <span className='fa fa-flask' />
        {' '} Creulla&apos;s {' '}
        <span className='fa fa' />
      </h1>
      <div className='nav'>
        <nav>
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/addskill'>Add Skill</Link>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
