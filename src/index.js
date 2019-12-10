/**
 * React 组件
 */
import React, { useState } from 'react'

function App(props) {
  const [count, setCount] = useState(1)
  return (
    <>
      <h1>Hello {props.title}</h1>
      <p>{count}</p>
      <button onClick = { () => {
        setCount(count + 1)
      } }>Click Me</button>
    </>
  )
}

// 这里导出的就是一个虚拟DOM
export default <App title="React SSR !!"></App>
