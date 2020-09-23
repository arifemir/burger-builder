import React from 'react'
import { connect } from 'react-redux'
import { orderNowClose } from '../../../store/actions'

import styles from './Modal.module.css'
import cn from 'classnames'
import Fragment from '../../../hoc/Fragment'
import BackDrop from '../BackDrop/BackDrop'

class Modal extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		return (
			nextProps.purchasing !== this.props.purchasing ||
			nextProps.children !== this.props.children
		)
	}

	render() {
		return (
			<Fragment>
				<BackDrop
					clicked={this.props.orderNowCloseP}
					show={this.props.purchasing}
				/>
				{this.props.children && (
					<div
						className={cn(
							styles.Modal,
							!this.props.purchasing === true && styles.none
						)}
					>
						{this.props.children}
					</div>
				)}
			</Fragment>
		)
	}
}

const mapStateToProps = state => {
	const { purchasing } = state.modalReducer
	return { purchasing }
}

const mapDispatchToProps = dispatch => {
	return {
		orderNowCloseP: () => dispatch(orderNowClose())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
