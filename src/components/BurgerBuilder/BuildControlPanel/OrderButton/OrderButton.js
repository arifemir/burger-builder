import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../../../store/actions/actionTypes'
import styles from './OrderButton.module.css'

class OrderButton extends Component {
	render() {
		return (
			<button
				className={styles.OrderButton}
				disabled={!this.props.purchasable}
				onClick={this.props.orderNowOpen}
			>
				{this.props.orderButtonText}
			</button>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		orderNowOpen: () => dispatch({ type: actionTypes.ORDER_NOW_OPEN })
	}
}

const mapStateToProps = state => {
	const { purchasable } = state
	return { purchasable }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderButton)
