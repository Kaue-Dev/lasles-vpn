import React from 'react'
import styles from "./RoundedButton.module.css"

const RoundedButton = ({textValue, hover = false}) => {
  return (
    <div>
      <button className={`${styles.button} ${hover ? styles.hover : ''}`}>{textValue}</button>
    </div>
  )
}

export default RoundedButton