import React from 'react'
import PropTypes from 'prop-types'

import Bread from './Bread'
import Meat from './Meat'
import Cheese from './Cheese'
import Bacon from './Bacon'
import Salad from './Salad'

const BurgerIngredient = (props) => {
  let ingrediend = null;

  switch (props.type) {
    case ('bread-bottom'):
      ingrediend = <Bread wichBread={'bread-bottom'}/>
      break;
    case ('bread-top'):
      ingrediend = <Bread wichBread={'bread-top'}/>
      break;
    case ('meat'):
      ingrediend = <Meat/>
      break;
    case ('cheese'):
      ingrediend = <Cheese/>
      break;
    case ('bacon'):
      ingrediend = <Bacon/>
      break;
    case ('salad'):
      ingrediend = <Salad/>
      break;
    default:
      ingrediend = null;
      break;
  }

  return ingrediend;
};

BurgerIngredient.propTypes = {
  type:PropTypes.string.isRequired
}

export default BurgerIngredient;
