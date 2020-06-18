import React from 'react'

import BurgerIngrediend from "./BurgerIngrediend/BurgerIngrediend";
import styles from './Burger.module.css'

const Burger = (props) => {
  return (
    <div className={styles.Burger}>
      <BurgerIngrediend type='bread-top'/>
      <BurgerIngrediend type='salad'/>
      <BurgerIngrediend type='salad'/>
      <BurgerIngrediend type='bacon'/>
      <BurgerIngrediend type='cheese'/>
      <BurgerIngrediend type='cheese'/>
      <BurgerIngrediend type='meat'/>
      <BurgerIngrediend type='meat'/>
      <BurgerIngrediend type='bread-bottom'/>
    </div>
  )
}

export default Burger;
