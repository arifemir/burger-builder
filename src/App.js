import React from 'react'
import Fragment from './components/hoc/Fragment'

import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import BurgerBuilder from './pages/BurgerBuilder'
import Checkout from './pages/Checkout'
import Orders from './pages/Orders'
import Layout from './components/Layout/Layout'
import Auth from "./pages/Auth";
import Logout from "./pages/Logout";

import { authCheckStore } from "./store/actions";
import {connect} from "react-redux";

class App extends React.Component {

  componentDidMount() {
    this.props.onTryAutoLoginWithLocalStorage()
  }

  render() {
    let routes = (
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/' exact component={BurgerBuilder} />
        <Redirect to='/'/>
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/orders' component={Orders} />
          <Route path='/auth' component={Auth} />
          <Route path='/logout' component={Logout} />
          <Route path='/' exact component={BurgerBuilder} />
          <Redirect to='/'/>
        </Switch>
      );
    }

		return (
			<Fragment>
				<Layout>
          {routes}
        </Layout>
			</Fragment>
		)
	}
}

const mapStateToProps = state => {
	return {
    isAuthenticated: state.authReducer.idToken
	}
}

const mapDispatchToProps = dispatch => {
	return {
    onTryAutoLoginWithLocalStorage: () => dispatch(authCheckStore())
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
