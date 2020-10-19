import reducer, {updatePurchaseState} from './burgerBuilder'
import * as actionTypes from '../actions/actionTypes'

const INGREDIENT_PRICES = {
	salad: 1,
	cheese: 1,
	meat: 2,
	bacon: 2
}

const initialState = {
  ingredients: {
    salad: 0,
    meat: 0,
    cheese: 0,
    bacon: 0
  },
	totalPrice: 0,
	purchasable: false,
	error: null,
  building: false
}

describe('BurgerBuilder reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  })

  it('should return +1 ingredients and price', () => {
    expect(reducer(initialState, {type: actionTypes.ADD_INGREDIENTS, ingredientName: 'salad'}))
      .toEqual({
        ...initialState,
        totalPrice: 1,
        purchasable: true,
        building: true,
        ingredients: {
          ...initialState.ingredients,
          salad: initialState.ingredients.salad + 1
        }
      })
  })
})