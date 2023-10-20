import React from 'react'
import styles from "./RetangularButton.module.css"

const RetangularButton = ({textContent, hover = false}) => { 
  return (
    <div className={styles.retangularButton}>
      <button className={`${styles.button} ${hover ? styles.hover : ''}`}>{textContent}</button>
    </div>
  )
}

export default RetangularButton