import React from 'react'

import BurgerIngredient from "./BurgerIngrediend/BurgerIngredient";
import styles from './Burger.module.css'

const Burger = (props) => {
  const ingredients = {...props.ingredients}
  const showingIngredient = [];

  for(let key in ingredients){
    for (let i = 0; i < ingredients[key]; i++){
      showingIngredient.push(<BurgerIngredient key={key+i} type={key}/>)
  }}

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
