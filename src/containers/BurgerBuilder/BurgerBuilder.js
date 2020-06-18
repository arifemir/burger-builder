import React, {Component} from 'react';
import Fragment from "../../hoc/Fragment";
import Burger from "../../components/Burger/Burger";
import BuildControlPanel from "../../components/Burger/BuildControlPanel/BuildControlPanel";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1
    }
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    this.setState({ingredients: updatedIngredients});
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount > 0) {
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      }
      updatedIngredients[type] = updatedCount;
      console.log(updatedIngredients)
      this.setState({ingredients:updatedIngredients});
    }

  }

  render() {

    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControlPanel
          addIngredient={(type)=>this.addIngredientHandler(type)}
          removeIngredient={(type)=>this.removeIngredientHandler(type)}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
