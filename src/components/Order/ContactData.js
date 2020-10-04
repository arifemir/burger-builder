import React, { Component } from 'react'

import { connect } from 'react-redux'
import { purchaseBurgerStart } from '../../store/actions'

import Button from '../util/Button'
import styles from './ContactData.module.css'
import Spinner from '../UI/Spinner'
import Input from '../UI/Input'
import { withRouter } from 'react-router-dom'

class ContactData extends Component {
	state = {
		name: undefined,
		street: undefined,
		postal: undefined,
		email: undefined
	}

	orderHandler = e => {
		const { ingredients, totalPrice, idToken } = this.props
		const { name, street, postal, email } = this.state
		e.preventDefault()
		const order = {
			ingredients,
			totalPrice,
			name,
			street,
			postal,
			email
		}
		this.props.onOrderBurger(order, idToken)
	}

	handleInputChange = e => {
		const { value, name } = e.target
		this.setState({ [name]: value })
	}

	render() {
		const { name, email, street, postal } = this.state

		return this.props.loading ? (
			<Spinner />
		) : (
			<div className={styles.ContactData}>
				<h4>Enter your Contact Data</h4>
				<form>
					<Input
						inputtype={'input'}
						type='text'
						name='name'
						placeholder='Your name'
						onChange={this.handleInputChange}
						value={name}
            label={'name'}
					/>
					<Input
						inputtype={'input'}
						type='text'
						name='email'
						placeholder='Your email'
						onChange={this.handleInputChange}
						value={email}
            label={'email'}
          />
					<Input
						inputtype={'input'}
						type='text'
						name='street'
						placeholder='Street'
						onChange={this.handleInputChange}
						value={street}
            label={'street'}
          />
					<Input
						inputtype={'input'}
						type='text'
						name='postal'
						placeholder='Postal Code'
						onChange={this.handleInputChange}
						value={postal}
            label={'postal'}
          />
					<Button type='success' onClick={this.orderHandler}>
						Order
					</Button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	const { ingredients, totalPrice } = state.burgerBuilderReducer
	const { loading } = state.orderReducer
  const { idToken } = state.authReducer
	return { ingredients, totalPrice, loading, idToken }
}

const mapDispatchToProps = dispatch => {
	return {
		onOrderBurger: (orderData, token) => dispatch(purchaseBurgerStart(orderData, token))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(ContactData))
