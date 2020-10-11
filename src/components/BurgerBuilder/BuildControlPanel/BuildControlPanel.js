import React from 'react'
import { withRouter } from 'react-router-dom'

import styles from './BuildControlPanel.module.css'

import Control from './Control'
import Price from './Price'
import OrderButton from './OrderButton'
import Button from "../../util/Button";

import { connect } from "react-redux";
import { authForOrder } from '../../../store/actions'

const controls = [
	{ label: 'salad', type: 'salad' },
	{ label: 'bacon', type: 'bacon' },
	{ label: 'cheese', type: 'cheese' },
	{ label: 'meat', type: 'meat' }
]

const BuildControlPanel = props => {

  const redirectToAuth = () => {
    props.history.push('/auth')
    props.authOrder()
  }

	return (
		<div className={styles.BuildControls}>
			<Price price={props.price} />
			{controls.map(ctrl => (
				<Control
					addIngredient={() => props.addIngredient(ctrl.type)}
					removeIngredient={() => props.removeIngredient(ctrl.type)}
					key={ctrl.label}
					label={ctrl.label}
					disabledInfo={props.disabledInfo[ctrl.type]}
				/>
			))}
      {props.isAuthenticated ?
        <OrderButton orderButtonText={'ORDER NOW'} /> :
        <Button sign onClick={redirectToAuth}>Login for order</Button>
      }
		</div>
	)
}

const mapDispatchToProps = dispatch => {
	return {
    authOrder: () => dispatch(authForOrder())
	}
}

export default connect(null,mapDispatchToProps)(withRouter(BuildControlPanel))
