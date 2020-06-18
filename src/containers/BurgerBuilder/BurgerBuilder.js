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

  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControlPanel/>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
