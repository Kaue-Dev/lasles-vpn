import React from 'react'
//Styles
import styles from "./Informations.module.css"
//Components
import InformationsIcon from './informationsIcon/InformationsIcon'
import DescriptionText from '../descriptionText/DescriptionText'
import Title from '../title/Title'
import Separator from '../verticalSeparator/VerticalSeparator'
//Images
import icon1 from "../../assets/icon1.svg"
import icon2 from "../../assets/icon2.svg"
import icon3 from "../../assets/icon3.svg"

const Informartions = () => {
  return (
    <div className={styles.informartions}>
      <div className={styles.users}>
        <InformationsIcon iconImgSrc={icon1} width="55px" height="25px" />
        <div className={styles.textsDiv}>
          <Title textContent="90+" fontSize = "1.56rem" fontWeight = "700"/>
          <DescriptionText textContent="Users" fontSize="1.25rem" />
        </div>
      </div>

      <Separator />

      <div className={styles.locations}>
        <InformationsIcon iconImgSrc={icon2} width="55px" height="25px" />
        <div className={styles.textsDiv}>
          <Title textContent="30+" fontSize = "1.56rem" fontWeight = "700"/>
          <DescriptionText textContent="Locations" fontSize="1.25rem" />
        </div>
      </div>

      <Separator />

      <div className={styles.servers}>
        <InformationsIcon iconImgSrc={icon3} width="55px" height="25px" />
        <div className={styles.textsDiv}>
          <Title textContent="50+" fontSize = "1.56rem" fontWeight = "700"/>
          <DescriptionText textContent="Servers" fontSize="1.25rem" />
        </div>
      </div>
    </div>
  )
}

export default Informartions