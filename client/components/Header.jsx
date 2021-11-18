import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <>
      <h1 className='app'>
        <span className='fa fa-thermometer' />
        {' '} Creulla&apos;s {' '}
        <span className='fa fa-flask' />
      </h1>
      <div className='nav'>
        <nav>
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/addSkill'>Add Skill</Link>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
