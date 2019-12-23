import React from 'react'
import styles from './about.css'
import WithStyle from './withStyle'

function About () {
  return (
    <h1 className = {styles.title}>About</h1>
  )
}

export default WithStyle(About, styles)