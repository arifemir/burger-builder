import React from 'react'

import BurgerIngredient from "./BurgerIngrediend/BurgerIngredient";
import styles from './Burger.module.css'

const Burger = (props) => {
  const ingredientValues = Object.values(props.ingredients);
  const ingredientKeys = Object.keys(props.ingredients);
  const showingIngredient = [];

  ingredientKeys.forEach((ingredientKey,index) => {
    for (let i = 0; i < ingredientValues[index]; i++)
      showingIngredient.push(<BurgerIngredient key={ingredientKey+i} type={ingredientKey}/>)
  })

  if(showingIngredient.length === 0) showingIngredient.push('Please start adding ingredients!');

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type='bread-top'/>
      {showingIngredient}
      <BurgerIngredient type='bread-bottom'/>
    </div>
  )
}

export default Burger;
