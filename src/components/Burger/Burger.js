import React from 'react'

import BurgerIngredient from "./BurgerIngrediend/BurgerIngredient";
import styles from './Burger.module.css'

const Burger = (props) => {
  const transformedIngredients = props.ingredients;
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type='bread-top'/>
      {
        transformedIngredients.map((ingredient, index) => {
          let showIngredients = []
            ,ingredientValue = Object.values(ingredient)[0]
            ,ingredientName = Object.keys(ingredient)[0];
          console.log(ingredientName,ingredientValue)
          for (let i = 0; i < ingredientValue; i++) {
            showIngredients.push(<BurgerIngredient key={ingredientName + index + i} type={ingredientName}/>)
          }
          return showIngredients;
        })
      }
      <BurgerIngredient type='bread-bottom'/>
    </div>
  )
}

export default Burger;
