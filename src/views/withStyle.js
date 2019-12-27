import React from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'

function WithStyle (Comp, style) {
  function NewComp (props) {
    if (props.staticContext) {
      props.staticContext.css.push(style._getCss())
    }
    return <Comp {...props} />
  }
  hoistNonReactStatic(NewComp, Comp)
  return NewComp
}

export default WithStyle