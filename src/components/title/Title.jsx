import React from 'react'
import styles from './Title.module.css'

const InformationsTitle = ({textContent, fontSize, fontWeight, width = "auto", margin = false}) => {
  return (
    <div className={margin ? styles.title : ''}>
      <h2 style={{
          fontSize: fontSize,
          fontWeight: fontWeight,
          margin: 0,
          width: width
        }}>{textContent}
      </h2>
    </div>
  )
}

export default InformationsTitle