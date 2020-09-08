import React, { Component } from 'react'
import Order from '../../../components/Order/Order'
import axios from '../../../axiosOrders'
export default class Orders extends Component {
	state = {
		orders: [],
		loading: true
	}

	componentDidMount() {
		axios
			.get('/orders.json')
			.then(res => {
				const fetchedOrders = []
				for (let key in res.data) {
					fetchedOrders.push(res.data[key])
				}
				this.setState({ orders: fetchedOrders, loading: false })
			})
			.catch(error => {
				console.log(error)
				this.setState({ loading: false })
			})
	}
	render() {
		return (
			<div style={{ marginTop: 20 }}>
				{this.state.orders.map((order, i) => {
					return <Order order={order} key={i} />
				})}
			</div>
		)
	}
}
