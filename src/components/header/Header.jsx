import React, { useEffect, useState } from 'react'
//Styles
import styles from "./Header.module.css"
//Components
import Icon from './headerIcon/Icon'
import HeaderOption from './headerOption/HeaderOption'
import RoundedButton from '../roundedButton/RoundedButton'

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.header} ${scrolling ? styles.shadow : ''}`}>
      <Icon />
      <div className={styles.optionsDiv}>
        <HeaderOption textValue="About" />
        <HeaderOption textValue="Features" />
        <HeaderOption textValue="Pricing" />
        <HeaderOption textValue="Testimonials" />
        <HeaderOption textValue="Help" />
      </div>
      <p className={styles.signin}>Sign In</p>
      <div style={{paddingLeft: "1.87rem"}}>
        <RoundedButton textValue="Sign Up" hover="true"/>
      </div>
    </div>
  )
}

export default Header