import React from 'react'
import styles from './Bread.module.css'
import PropTypes from "prop-types";

import Seeds from '../Seeds/Seeds'

const Bread = ({wichBread}) => {
  return wichBread.match('bread-bottom')
   ? <div className={styles.BreadBottom}> </div>
   : (
      <div className={styles.BreadTop}>
        <Seeds/>
      </div>
    )
}

Bread.propTypes = {
  wichBread:PropTypes.string.isRequired
}

export default Bread;
