import React, { lazy, Suspense } from 'react'

import Fragment from './components/hoc/Fragment'
import Layout from './components/Layout/Layout'

import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import { authCheckStore } from "./store/actions";
import { connect } from "react-redux";
import Spinner from './components/UI/Spinner';

const BurgerBuilder = lazy(() => import('./pages/BurgerBuilder'))
const Checkout = lazy(() => import('./pages/Checkout'))
const Orders = lazy(() => import('./pages/Orders'))
const Auth = lazy(() => import('./pages/Auth'))
const Logout = lazy(() => import('./pages/Logout'))




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
      <Suspense fallback={<Spinner/>}>
			  <Fragment>
			  	<Layout>
            {routes}
          </Layout>
        </Fragment>
      </Suspense>
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
