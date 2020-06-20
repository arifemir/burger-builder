import React from 'react';

import styles from './Modal.module.css'
import cn from 'classnames'
import Fragment from "../../../hoc/Fragment";
import BackDrop from "../BackDrop/BackDrop";

const Modal = (props) => {
  return (
    <Fragment>
      <BackDrop clicked={props.modalClosed} show={props.show}/>
      <div
        className={
          cn(
            styles.Modal,(!props.show === true) && styles.none
          )
        }
      >
        {props.children}
      </div>
    </Fragment>

  );
};

export default Modal;
