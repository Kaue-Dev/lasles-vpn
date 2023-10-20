import React from 'react'
import styles from "./Icon.module.css"
import icon from "../../../assets/header-icon.svg"

const Icon = () => {
  return (
    <div className={styles.icon}>
      <img src={icon} alt='HeaderIcon'/>
      <h1 className={styles.h1}>LaslesVPN</h1>
    </div>
  )
}

export default Icon