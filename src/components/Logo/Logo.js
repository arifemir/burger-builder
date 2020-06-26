import React from 'react';

import burgerLogo from '../../assets/images/burgerLogo.png'
import styles from './Logo.module.css'

const Logo = (props) => (
  <div style={{height: props.height}} className={styles.Logo}>
    <img  src={burgerLogo} alt="burger"/>
  </div>
)

export default Logo;
