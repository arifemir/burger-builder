import React from 'react';

import styles from './Modal.module.css'
import cn from 'classnames'

const Modal = (props) => {
  return (
    <div
      className={cn(styles.Modal,(!props.show === true) && styles.none)}
    >
      {props.children}
    </div>
  );
};

export default Modal;
