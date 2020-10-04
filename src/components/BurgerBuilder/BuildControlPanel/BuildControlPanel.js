import React from 'react'
import styles from './BuildControlPanel.module.css'

import Control from './Control'
import Price from './Price'
import OrderButton from './OrderButton'
import Button from "../../util/Button";
import { withRouter } from 'react-router-dom'
const controls = [
	{ label: 'salad', type: 'salad' },
	{ label: 'bacon', type: 'bacon' },
	{ label: 'cheese', type: 'cheese' },
	{ label: 'meat', type: 'meat' }
]

const BuildControlPanel = props => {

  const redirectToAuth = () => {
    props.history.push('/auth');
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
        <Button sign onClick={redirectToAuth}>Login</Button>
      }
		</div>
	)
}

export default withRouter(BuildControlPanel)
