import React from 'react'
import styles from "./HeaderOptions.module.css"

const HeaderOption = (props) => {
  return (
    <div className={styles.headerOption}>
      <p>{props.textValue}</p>
    </div>
  )
}

export default HeaderOption