import React from 'react';

import styles from './Modal.module.css'
import cn from 'classnames'
import Fragment from "../../../hoc/Fragment";
import BackDrop from "../BackDrop/BackDrop";

class Modal extends React.Component {

  shouldComponentUpdate(nextProps,nextState) {
    return (nextProps.show !== this.props.show);
  }

  render()
  {
    return (
      <Fragment>
        <BackDrop clicked={this.props.modalClosed} show={this.props.show}/>
        <div
          className={
            cn(
              styles.Modal, (!this.props.show === true) && styles.none
            )
          }
        >
          {this.props.children}
        </div>
      </Fragment>
    );
  }
};

export default Modal;
