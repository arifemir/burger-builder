import React from 'react';
import styles from './ControlButton.module.css'
import cn from 'classnames';

const ControlButton = (props) =>
  <button
    className=
      {
        cn(
          styles.ControlButton,
          (props.name==='Less') ? styles.Less : styles.More,
          (props.disabledInfo===true) && styles.Disabled
        )
      }
    onClick={props.click}

  >
    {props.name}
  </button>;

export default ControlButton;
