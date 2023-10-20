import React from 'react'
import styles from './ComentaryBlock.module.css'
import Title from '../title/Title'
import DescriptionText from '../descriptionText/DescriptionText'
import star from "../../assets/starIcon.svg"

const ComentaryBlock = ({ userName, userLocation, userComentary, imgSrc, outline = false }) => {
  return (
    <div className={`${styles.comentaryBlock} ${outline ? styles.outline : ''}`}>
      <div className={styles.ImgAndTexts}>
        <img src={imgSrc} alt="FotoPerfil" />
        <div className={styles.texts}>
          <Title 
            fontSize="18px" fontWeight="500"
            textContent={userName}
          />
          <DescriptionText 
            fontSize="14px" fontWeight="400"
            textContent={userLocation}
          />
        </div>
        <div className={styles.noteAndStar}>
          <p>4.5</p>
          <img src={star} alt="StarIcon" />
        </div>
      </div>
      <div className={styles.comentaryDiv}>
        <p className={styles.comentary}>{userComentary}</p>
      </div>
    </div>
  )
}

export default ComentaryBlock