import React from 'react'
import styles from "./InformationsIcon.module.css"

const InformationsIcon = ({iconImgSrc, width, height}) => {
  return (
    <div className={styles.informationsIcon}>
      <img src={iconImgSrc} alt="Icon" width={width} height={height} />
    </div>
  )
}

export default InformationsIcon