import React, {Component} from 'react';

import Fragment from "../../hoc/Fragment";
import Burger from "../../components/Burger/Burger";
import BuildControlPanel from "../../components/BuildControlPanel/BuildControlPanel";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

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
    totalPrice:6,
    purchasable: true,
    purchasing:false,
    orderButtonText:"ORDER NOW"
  }

  updatePurchaseState(updatedIngredients) {
    const sum = Object.values(updatedIngredients)
      .reduce((x,y)=>x+y,0);
    this.setState({purchasable:sum>0})
  }

  purchaseHandler = () =>{
    this.setState({purchasing:true})
  }

  addIngredientHandler = (type) => {
    const updatedIngredients = {...this.state.ingredients}
    updatedIngredients[type] = (this.state.ingredients[type] + 1);
    this.setState({ingredients: updatedIngredients, totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]});
    this.updatePurchaseState(updatedIngredients)
  }

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] > 0) {
      const updatedIngredients = {...this.state.ingredients}
      updatedIngredients[type] = (this.state.ingredients[type] - 1);
      if (this.state.totalPrice >= INGREDIENT_PRICES[type])
        this.setState({ingredients: updatedIngredients, totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type]});
      this.updatePurchaseState(updatedIngredients)
    }
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing:false})
  }

  render()
  {

    const disabledInfo = {
      ...this.state.ingredients
    }

    for(let key in disabledInfo)
      disabledInfo[key] = (disabledInfo[key] <= 0);

    return (
      <Fragment>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControlPanel
          addIngredient={(type) => this.addIngredientHandler(type)}
          removeIngredient={(type) => this.removeIngredientHandler(type)}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          purchasing={this.purchaseHandler}
          orderButtonText={this.state.orderButtonText}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
