import React from 'react'
import styles from './Bread.module.css'

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

export default Bread;
