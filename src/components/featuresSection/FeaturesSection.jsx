import React from 'react'
//Images
import IlustrationImage from '../ilustrationImage/IlustrationImage'
import image from "../../assets/image2.svg"
//Style
import styles from "./FeaturesSections.module.css"
//Components
import Title from '../title/Title'
import DescriptionText from '../descriptionText/DescriptionText'
import CheckedItens from './checkedItens/CheckedItens'

const FeaturesSection = () => {
  return (
    <div className={styles.featuresSection}>
      <IlustrationImage src={image} width="500px" height="400px"/>
      <div className={styles.textsDiv}>
        <Title 
          textContent="We Provide Many Features You Can Use"
          fontSize="35px" fontWeight="600" width="380px"
        />

        <DescriptionText 
          textContent="You can explore the features that we provide with fun and have their own functions each feature."
          fontSize="16px" width='420px'
        />

        <div className={styles.checkedItensDiv}>
          <CheckedItens textContent="Powerfull online protection."/>
          <CheckedItens textContent="Internet without borders."/>
          <CheckedItens textContent="Supercharged VPN"/>
          <CheckedItens textContent="No specific time limits."/>
        </div>  
      </div>
    </div>
  )
}

export default FeaturesSection