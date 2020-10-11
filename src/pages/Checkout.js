import React, { Component } from 'react'
import { connect } from 'react-redux'
import CheckoutSummary from '../components/Order/CheckoutSummary'

import { Redirect, Route } from 'react-router-dom'
import ContactData from '../components/Order/ContactData'
class Checkout extends Component {
	checkoutCancelledHandler = () => {
		this.props.history.goBack()
	}

	checkoutContinuedHandler = () => {
		this.props.history.replace('/checkout/contact-data')
	}

	render() {
		const { ingredients, purchased } = this.props
		let summary = <Redirect to='/' />
		if (ingredients && !purchased) {
			summary = (
				<CheckoutSummary
					ingredients={ingredients}
					checkoutCancelled={this.checkoutCancelledHandler}
					checkoutContinued={this.checkoutContinuedHandler}
				/>
			)
		}

		return (
			<div>
				{summary}
				<Route
					path={this.props.match.path + '/contact-data'}
					render={() => <ContactData />}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	const { ingredients } = state.burgerBuilderReducer
	const { purchased } = state.orderReducer
	return { ingredients, purchased }
}

export default connect(mapStateToProps)(Checkout)
