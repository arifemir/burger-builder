import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../../../components/util/Button'
import styles from './ContactData.module.css'
import axios from '../../../axiosOrders'
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
		this.setState({ loading: true })
		const order = {
			ingredients,
			price,
			name,
			street,
			postal,
			email
		}
		axios
			.post('/orders.json', order)
			.then(res => {
				console.log(res)
				this.setState({ loading: false })
				this.props.history.push('/')
			})
			.catch(err => {
				this.setState({ loading: false })
			})
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
	const { ingredients, totalPrice } = state
	return { ingredients, totalPrice }
}

export default connect(mapStateToProps)(withRouter(ContactData))
