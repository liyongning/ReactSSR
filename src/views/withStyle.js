import React from 'react'

function WithStyle (Comp, style) {
  return function (props) {
    if (props.staticContext) {
      props.staticContext.css.push(style._getCss())
    }
    return <Comp {...props} />
  }
}

export default WithStyle