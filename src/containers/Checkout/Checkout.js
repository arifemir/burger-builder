import React, { Component } from 'react'
import { connect } from 'react-redux'

import CheckoutSummary from '../../components/Order/ChekoutSummary/CheckoutSummary'

import { Redirect, Route } from 'react-router-dom'
import ContactData from '../../containers/Checkout/ContactData/ContactData'
class Checkout extends Component {
	checkoutCancelledHandler = () => {
		this.props.history.goBack()
	}

	checkoutContinuedHandler = () => {
		this.props.history.replace('/checkout/contact-data')
	}

	render() {
		const { ingredients } = this.props
		let summary = <Redirect to='/' />
		if (ingredients) {
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
	return { ingredients }
}

export default connect(mapStateToProps)(Checkout)
