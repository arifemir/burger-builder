import React from 'react';
import styles from './Control.module.css'

import ControlButton from "./ControlButton/ControlButton";
import ControlLabel from "./ControlLabel/ControlLabel";

const Control = (props) => {
  return (
    <div className={styles.Control}>
      <ControlLabel label={props.label}/>
      <ControlButton
        click={props.removeIngredient}
        disabledInfo={props.disabledInfo}
        name='Less'
      />
      <ControlButton
        click={props.addIngredient}
        name='More'
      />
    </div>
  );
};

export default Control;
