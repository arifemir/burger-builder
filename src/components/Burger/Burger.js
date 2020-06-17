import React from 'react'

import BurgerIngrediend from "./BurgerIngrediend/BurgerIngrediend";
import Fragment from "../../hoc/Fragment";

const Burger = (props) => {
  return (
    <Fragment>
      <BurgerIngrediend type='bread-top'/>
      <BurgerIngrediend type='salad'/>
      <BurgerIngrediend type='salad'/>
      <BurgerIngrediend type='bacon'/>
      <BurgerIngrediend type='cheese'/>
      <BurgerIngrediend type='cheese'/>
      <BurgerIngrediend type='meat'/>
      <BurgerIngrediend type='meat'/>
      <BurgerIngrediend type='bread-bottom'/>
    </Fragment>
  )
}

export default Burger;
