import React from 'react'
import Fragment from './components/hoc/Fragment'

import { Route, Switch, Redirect } from 'react-router-dom'

import BurgerBuilder from './pages/BurgerBuilder'
import Checkout from './pages/Checkout'
import Orders from './pages/Orders'
import Layout from './components/Layout/Layout'
import Auth from "./pages/Auth";
import Logout from "./pages/Logout";

class App extends React.Component {
	render() {
		return (
			<Fragment>
				<Layout>
					<Switch>
						<Route path='/checkout' component={Checkout} />
						<Route path='/orders' component={Orders} />
						<Route path='/auth' component={Auth} />
						<Route path='/logout' component={Logout} />
						<Route path='/' exact component={BurgerBuilder} />
            <Redirect to='/'/>
					</Switch>
        </Layout>
			</Fragment>
		)
	}
}

export default App
