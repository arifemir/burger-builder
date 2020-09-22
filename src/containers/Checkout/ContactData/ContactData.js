import React, { Component } from 'react'

import { connect } from 'react-redux'
import { purchhaseBurgerStart } from '../../../store/actions'

import Button from '../../../components/util/Button'
import styles from './ContactData.module.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import { withRouter } from 'react-router-dom'

class ContactData extends Component {
	state = {
		name: undefined,
		street: undefined,
		postal: undefined,
		email: undefined,
		loading: false
	}

	orderHandler = e => {
		const { ingredients, price } = this.props
		const { name, street, postal, email } = this.state
		e.preventDefault()
		const order = {
			ingredients,
			price,
			name,
			street,
			postal,
			email
		}
		this.props.onOrderBurger(order)
	}

	handleInputChange = e => {
		const { value, name } = e.target
		this.setState({ [name]: value })
	}

	render() {
		const { name, email, street, postal } = this.state

		return this.state.loading ? (
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
					/>
					<Input
						inputtype={'input'}
						type='text'
						name='email'
						placeholder='Your email'
						onChange={this.handleInputChange}
						value={email}
					/>
					<Input
						inputtype={'input'}
						type='text'
						name='street'
						placeholder='Street'
						onChange={this.handleInputChange}
						value={street}
					/>
					<Input
						inputtype={'input'}
						type='text'
						name='postal'
						placeholder='Postal Code'
						onChange={this.handleInputChange}
						value={postal}
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
	return { ingredients, totalPrice }
}

const mapDispatchToProps = dispatch => {
	return {
		onOrderBurger: orderData => dispatch(purchhaseBurgerStart(orderData))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(ContactData))
