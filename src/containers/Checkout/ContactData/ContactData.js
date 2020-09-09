import React, { Component } from 'react'
import Button from '../../../components/util/Button'
import styles from './ContactData.module.css'
import axios from '../../../axiosOrders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import { withRouter } from 'react-router-dom'
class ContactData extends Component {
	state = {
		name: '',
		email: '',
		adress: {
			street: '',
			postalCode: ''
		},
		loading: false
	}

	orderHandler = e => {
		const { ingredients, price } = this.props
		e.preventDefault()
		this.setState({ loading: true })
		const order = {
			ingredients,
			price,
			customer: {
				name: 'arif',
				age: 21,
				address: {
					street: 'Teststreet 1',
					zipCode: '41355',
					country: 'Sakarya'
				},
				email: 'arif@gauk.com'
			}
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

	render() {
		return this.state.loading ? (
			<Spinner />
		) : (
			<div className={styles.ContactData}>
				<h4>Enter your Contact Data</h4>
				<form>
					<Input inputtype={'input'} type='text' name='name' placeholder='Your name' />
					<Input inputtype={'input'} type='text' name='email' placeholder='Your email' />
					<Input inputtype={'input'} type='text' name='street' placeholder='Street' />
					<Input inputtype={'input'} type='text' name='postal' placeholder='Postal Code' />
					<Button type='success' onClick={this.orderHandler}>
						Order
					</Button>
				</form>
			</div>
		)
	}
}

export default withRouter(ContactData)
