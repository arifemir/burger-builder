import React, {Component} from 'react';
import Fragment from "../../hoc/Fragment";
import Burger from "../../components/Burger/Burger";
import BuildControlPanel from "../../components/Burger/BuildControlPanel/BuildControlPanel";

const INGREDIENT_PRICES = {
  salad: 1,
  cheese: 1,
  meat: 2,
  bacon: 2
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1
    },
    totalPrice:6
  }

  addIngredientHandler = (type) => {
    const updatedIngredients = {...this.state.ingredients}
    updatedIngredients[type] = (this.state.ingredients[type] + 1);
    this.setState({ingredients: updatedIngredients, totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]});
    console.log(this.state.totalPrice)
  }

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] > 0) {
      const updatedIngredients = {...this.state.ingredients}
      updatedIngredients[type] = (this.state.ingredients[type] - 1);
      console.log(this.state.totalPrice,INGREDIENT_PRICES[type])
      if (this.state.totalPrice >= INGREDIENT_PRICES[type]) {
        this.setState({ingredients: updatedIngredients, totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type]});
      }
    }
  }

  render()
  {

    const disabledInfo = {
      ...this.state.ingredients
    }

    for(let key in disabledInfo){
      disabledInfo[key] = (disabledInfo[key] <= 0);
    }

    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControlPanel
          addIngredient={(type) => this.addIngredientHandler(type)}
          removeIngredient={(type) => this.removeIngredientHandler(type)}
          disabledInfo={disabledInfo}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
