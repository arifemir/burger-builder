import React, { Component } from 'react'

import { connect } from 'react-redux'
import { orderNowOpen } from '../../../../store/actions'

import styles from './OrderButton.module.css'

class OrderButton extends Component {
	render() {
		return (
			<button
				className={styles.OrderButton}
				disabled={!this.props.purchasable}
				onClick={this.props.orderNowOpenP}
			>
				{this.props.orderButtonText}
			</button>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		orderNowOpenP: () => dispatch(orderNowOpen())
	}
}

const mapStateToProps = state => {
	const { purchasable } = state.burgerBuilderReducer
	return { purchasable }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderButton)
