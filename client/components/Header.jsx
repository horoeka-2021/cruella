import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <div className='nav'>
      <nav>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/addSkill'>Add your world&apos;s best skill</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header
