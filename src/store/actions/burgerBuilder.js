import {ADD_INGREDIENTS,REMOVE_INGREDIENTS,SET_INGREDIENTS,FETCH_INGREDIENTS_FAILED,SET_TOTAL_PRICE,INIT_INGREDIENT,INIT_TOTAL_PRICE} from './actionTypes'

export const addIngredient = ingredientName => Object({ type: ADD_INGREDIENTS, ingredientName })
export const removeIngredient = ingredientName => Object({ type: REMOVE_INGREDIENTS, ingredientName })
export const setIngredients = ingredients => Object({type: SET_INGREDIENTS,ingredients})
export const setFetchFailedError = error => Object({ type: FETCH_INGREDIENTS_FAILED, error })
export const initIngredient = () => Object({type: INIT_INGREDIENT})
export const setTotalPrice = totalPrice => Object({ type: SET_TOTAL_PRICE, totalPrice })
export const initTotalPrice = () => Object({ type: INIT_TOTAL_PRICE })


