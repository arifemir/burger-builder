import React from 'react'

import NavigationItems from './NavigationItems'
import BackDrop from '../UI/BackDrop'
import Fragment from '../hoc/Fragment'

import styles from './SideDrawer.module.css'
import cn from 'classnames'
import DrawerToggle from './DrawerToggle'

const SideDrawer = props => {
	const sideDrawerShowStyle = props.sideDrawerShowState
		? styles.Open
		: styles.Close
	return (
		<Fragment>
			<BackDrop show={props.sideDrawerShowState} clicked={props.toggle} />
			<div className={cn(styles.SideDrawer, sideDrawerShowStyle)} onClick={props.toggle} >
				<DrawerToggle click={props.toggle} height='9%' />
				<nav>
					<NavigationItems isAuthenticated={props.isAuth} />
				</nav>
			</div>
		</Fragment>
	)
}

export default SideDrawer
