import React from 'react'
import styles from "./DescriptionText.module.css"

const DescriptionText = ({textContent, fontSize, fontWeight, width = "auto"}) => {
  return (
    <div className={styles.descriptionText}>
      <p style={{
          fontSize: fontSize, 
          width: width,
          fontWeight: fontWeight,
          margin: 0
        }}>{textContent}
      </p>
    </div>
  )
}

export default DescriptionText