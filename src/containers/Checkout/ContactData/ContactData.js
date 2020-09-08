import React, { Component } from 'react'
import Button from '../../../components/util/Button'
import styles from './ContactData.module.css'
class ContactData extends Component {
	state = {
		name: '',
		email: '',
		adress: {
			street: '',
			postalCode: ''
		}
	}

	render() {
		return (
			<div className={styles.ContactData}>
				<h4>Enter your Contact Data</h4>
				<form>
					<input type='text' name='name' placeholder='Your name' />
					<input type='text' name='email' placeholder='Your email' />
					<input type='text' name='street' placeholder='Street' />
					<input type='text' name='postal' placeholder='Postal Code' />
					<Button type='success'>Order</Button>
				</form>
			</div>
		)
	}
}

export default ContactData
