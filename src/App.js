import React from 'react'
import Fragment from './hoc/Fragment'
import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import { Route, Switch } from 'react-router-dom'
import Orders from './containers/Checkout/Orders/Orders'
class App extends React.Component {
	render() {
		return (
			<Fragment>
				<Layout>
					<Switch>
						<Route path='/checkout' component={Checkout} />
						<Route path='/orders' component={Orders} />
						<Route path='/' exact component={BurgerBuilder} />
					</Switch>
				</Layout>
			</Fragment>
		)
	}
}

export default App
