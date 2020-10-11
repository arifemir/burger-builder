import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOrderStart } from '../store/actions'
import Order from '../components/Order/Order'
import Spinner from '../components/UI/Spinner'
class Orders extends Component {
	componentDidMount() {
		this.props.initOrders(this.props.idToken, this.props.localId)
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
  const { idToken, localId} = state.authReducer
	return {
		loading,
		orders,
    idToken,
    localId
	}
}

const mapDispatchToProps = dispatch => {
	return {
		initOrders: (token, localId) => dispatch(fetchOrderStart(token, localId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
