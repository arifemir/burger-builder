import React from 'react';
import styles from './ControlLabel.module.css'
import cn from 'classnames'

const ControlLabel = (props) => {
  let labelClr='';
  switch (props.label) {
    case ('salad') :
      labelClr = styles.salad
      break;
    case ('bacon'):
      labelClr = styles.bacon
      break;
    case ('meat'):
      labelClr = styles.meat
      break;
    case ('cheese'):
      labelClr = styles.cheese
      break;
    default:
      break;
  }
  return <div className={cn(styles.ControlLabel, labelClr)}>{props.label}</div>
}


export default ControlLabel;
