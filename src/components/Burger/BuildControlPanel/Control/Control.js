import React from 'react';
import styles from './Control.module.css'

import ControlButton from "./ControlButton/ControlButton";
import ControlLabel from "./ControlLabel/ControlLabel";

const Control = (props) => {
  return (
    <div className={styles.Control}>
      <ControlLabel label={props.label}/>
      <ControlButton name='Less' />
      <ControlButton name='More'/>
    </div>
  );
};

export default Control;
