import React from 'react'

import Bread from './Bread/Bread'
import Meat from './Meat/Meat'
import Cheese from './Cheese/Cheese'
import Bacon from './Bacon/Bacon'
import Salad from './Salad/Salad'

const BurgerIngrediend = (props) => {
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

export default BurgerIngrediend;
