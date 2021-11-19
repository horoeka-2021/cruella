import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// import actions
import { fetchPeople } from '../actions/people'

// import other components
import PersonListItem from './PersonListItem'

function PeopleList (props) {
  const { children, history } = props

  // setting people equal to the current state
  const people = useSelector(state => state.people)

  // useEffect to call fetchProducts
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPeople())
  }, [])

  // function addPersonToCart (product) {
  //   const { id, name } = product
  //   const newCartItem = { id, name }
  //   dispatch(addToCart(newCartItem))
  //   history.push('/cart')
  // }

  return (
    <div className='productList'>
      <div className='welcome'>
        <p>
          Welcome to Creulla&apos;s micro-awesome exhange.

          Access a selection of best in class microskills, add your own or mix and match for any occasion.

        </p>
      </div>
      {/* {children} This holds the WaitIndicator (from App) */}
      {people.map(person => {
        return (
          // link to /people/:id and pass person as a prop
          <Link to={`/people/${person.id}`} key={person.id} person={person}>
            <PersonListItem
              key={person.id}
              person={person}
              // addToCart={addPersonToCart}
            />
          </Link>
        )
      })}
    </div>
  )
}

export default PeopleList
