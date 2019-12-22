import React from 'react'
import { Redirect } from 'react-router-dom'

function Redirection (props) {
  return (
    // Redirect组件会自动为context添加属性，{ action: 'REPLACE', location: { pathname: '/login', search: '', hash: '', state: undefined }, url: '/login' }
    <Redirect to = "/login" />
  )
}

export default Redirection