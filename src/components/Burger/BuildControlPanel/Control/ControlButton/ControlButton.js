import React from 'react';
import styles from './ControlButton.module.css'
import cn from 'classnames';

const ControlButton = (props) =>
  <button
    className={cn(styles.ControlButton,(props.name==='Less') ? styles.Less : styles.More)}
    onClick={(props.name==='Less') ? () => props.removeIngredient(props.label) : () => props.addIngredient(props.label)}
  >
    {props.name}
  </button>;

export default ControlButton;
