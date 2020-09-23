import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOrderStart } from '../../../store/actions'
import Order from '../../../components/Order/Order'
import Spinner from '../../../components/UI/Spinner/Spinner'
class Orders extends Component {
	componentDidMount() {
		this.props.initOrders()
	}
	render() {
		return (
			<div style={{ marginTop: 20 }}>
				{this.props.loading && <Spinner />}
				{this.props.orders.map((order, i) => {
					return <Order order={order} key={i} />
				})}
			</div>
		)
	}
}

const mapStateToProps = state => {
	const { loading, orders } = state.orderReducer
	return {
		loading,
		orders
	}
}

const mapDispatchToProps = dispatch => {
	return {
		initOrders: () => dispatch(fetchOrderStart())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
