import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getHomeList } from '../store/modules/home'
import withStyle from './withStyle'
import styles from './home.css'

function Home(props) {
  const [count, setCount] = useState(1)

  useEffect(() => {
    // 如果数据为空，则在客户端再获取一次数据, 不为空则就使用服务端获取的数据
    if (!props.list.length) {
      props.getHomeList()
    }
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

// 仿nuxt，为每个组件加一个loadData方法，用于获取和填充store数据
Home.loadData = (store) => {
  return store.dispatch(getHomeList())
}

export default connect(state => ({ list: state.home.list }), { getHomeList })(
  withStyle(Home, styles)
)
