import React from 'react'
//redux
import { connect } from 'react-redux'
import { orderNowClose } from '../../../store/actions'

import Fragment from '../../hoc/Fragment'
import styles from './OrderSummary.module.css'
import cn from 'classnames'
import ControlLabel from '../BuildControlPanel/ControlLabel'
import OrderSummaryButton from './OrderSummaryButton'

class OrderSummary extends React.Component {
	render() {
		const ingredientSummary = Object.keys(this.props.ingredients).map(
			ingredientKey => (
				<li className={cn(styles.ListItem)} key={ingredientKey}>
					<span className={styles.Key}>
						<ControlLabel label={ingredientKey} /> :{' '}
						{this.props.ingredients[ingredientKey]}
					</span>
				</li>
			)
		)
		return (
			<Fragment>
				<h3 className={styles.Header}>Your Order</h3>
				<ol className={styles.List}>{ingredientSummary}</ol>
				<p>
					Total Price:<strong> {this.props.totalPrice}$</strong>
				</p>
				<div className={styles.Buttons}>
					<OrderSummaryButton purchaseState={this.props.orderNowCloseP}>
						Cancel
					</OrderSummaryButton>
					<OrderSummaryButton purchaseState={this.props.purchaseContinue}>
						Continue
					</OrderSummaryButton>
				</div>
			</Fragment>
		)
	}
}

const mapStateToProps = state => {
	const { totalPrice, ingredients, purchasing } = state.burgerBuilderReducer
	return { purchasing, totalPrice, ingredients }
}

const mapDispatchToProps = dispatch => {
	return {
		orderNowCloseP: () => dispatch(orderNowClose())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary)
