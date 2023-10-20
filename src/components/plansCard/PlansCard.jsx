import React from 'react'
//Styles
import styles from "./PlansCard.module.css"
//Images
import image from "../../assets/plansImage.svg"
import icon from "../../assets/simpleCheckIcon.svg"
//Components
import Title from '../title/Title'
import DescriptionText from '../descriptionText/DescriptionText'
import RoundedButton from '../roundedButton/RoundedButton'

const PlansCard = ({titleText, standart = false, premium = false, priceText}) => {
  return (
    <div className={`${styles.plansCard} ${premium ? styles.redBorder : ''}`}>
      <img src={image} alt="PlansImage" width={140} height={165} style={{marginTop:"80px"}}/>
      <div style={{margin: "30px 0"}}>
        <Title textContent={titleText} fontSize="18px" fontWeight="500" />
      </div>

      <div style={{display: "flex", flexDirection: "column", gap:"10px"}}>
        <div className={styles.iconAndText}>
          <img src={icon} alt="CheckIcon" />
          <DescriptionText textContent="Unlimited Bandwitch"/>
        </div>

        <div className={styles.iconAndText}>
          <img src={icon} alt="CheckIcon" />
          <DescriptionText textContent="Encrypted Connection"/>
        </div>

        <div className={styles.iconAndText}>
          <img src={icon} alt="CheckIcon" />
          <DescriptionText textContent={`${standart || premium ? `Yes` : `No`} Traffic Logs`}/>
        </div>

        <div className={standart || premium ? styles.visible : styles.invisible}>
          <img src={icon} alt="CheckIcon" />
          <DescriptionText textContent="Works on All Devices"/>
        </div>

        <div className={standart || premium ? styles.visible : styles.invisible}>
          <img src={icon} alt="CheckIcon" />
          <DescriptionText textContent="Connect Anyware"/>
        </div>

        <div className={premium ? styles.visible : styles.invisible}>
          <img src={icon} alt="CheckIcon" />
          <DescriptionText textContent="Get New Features"/>
        </div>
      </div>

      <div className={styles.prices}>
        <div className={styles.priceAndMonth}>
          <Title textContent={priceText} fontSize="25px" fontWeight="600"/>
          <DescriptionText 
            textContent={`${standart || premium ? "/ mon" : ""}`} 
            fontSize="25px" fontWeight="400"
          />
        </div>
        <RoundedButton textValue="Select" hover="true" padding="false"/>
      </div>
    </div>
  )
}

export default PlansCard