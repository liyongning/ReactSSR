import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getHomeList } from '../store/modules/home'

function Home(props) {
  const [count, setCount] = useState(1)

  useEffect(() => {
    props.getHomeList()
  }, [])

  return (
    <>
      <h1>Hello {props.title}</h1>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click Me
      </button>
      <hr />
      <ul>
        {props.list.map(item => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </>
  )
}

export default connect(state => ({ list: state.home.list }), { getHomeList })(
  Home
)
