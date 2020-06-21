import React from 'react';

import styles from './BackDrop.module.css'

const BackDrop = (props) =>
  props.show
  ?
  <div className={styles.BackDrop} onClick={props.clicked}/>
  :
  null;


export default BackDrop;
