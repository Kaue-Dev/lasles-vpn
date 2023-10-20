import React from 'react'
//Image
import icon from "../../../assets/checkIcon.svg"
//Components
import DescriptionText from '../../descriptionText/DescriptionText'
//Styles
import styles from "./CheckedItens.module.css"

const CheckedItens = ({textContent}) => {
  return (
    <div className={styles.checkedItens}>
      <img src={icon} alt="CheckIcon" />
      <DescriptionText 
        textContent={textContent}
        fontSize="14px"
      />
    </div>
  )
}

export default CheckedItens