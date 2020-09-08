import React from 'react'
import Fragment from './hoc/Fragment'
import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
	render() {
		return (
			<Fragment>
				<Layout>
					<Switch>
						<Route path='/checkout' component={Checkout} />
						<Route path='/' exact component={BurgerBuilder} />
					</Switch>
				</Layout>
			</Fragment>
		)
	}
}

export default App
