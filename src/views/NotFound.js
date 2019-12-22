import React from 'react'
import { Route } from 'react-router-dom'

// 出现异常时为staticContext赋值
function Exception ({code, children}) {
  return <Route render = {
    ({staticContext}) => {
      if (staticContext) {
        staticContext.statusCode = code
      }
      return children
    }
  } />
}

function NotFound () {
  return <Exception code = {404}>
    <h1>瞅啥呢</h1>
  </Exception>
}

export default NotFound