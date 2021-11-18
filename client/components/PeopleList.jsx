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
          Welcome! Please choose from our delicious selection of people and don&apos;t
          hesitate to let us know if we can answer any of your questions.
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
