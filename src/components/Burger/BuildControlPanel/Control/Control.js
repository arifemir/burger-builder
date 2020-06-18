import React from 'react';
import styles from './Control.module.css'

import ControlButton from "./ControlButton/ControlButton";
import ControlLabel from "./ControlLabel/ControlLabel";

const Control = (props) => {
  return (
    <div className={styles.Control}>
      <ControlLabel label={props.label}/>
      <ControlButton
        label={props.label}
        removeIngredient={(type)=>props.removeIngredient(type)}
        name='Less' />
      <ControlButton
        label={props.label}
        addIngredient={(type)=>props.addIngredient(type)}
        name='More'
      />
    </div>
  );
};

export default Control;
