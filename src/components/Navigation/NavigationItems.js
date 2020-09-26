import React from 'react'
import NavigationItem from './NavigationItem'
import styles from './NavigationItems.module.css'
const NavigationItems = () => {
	return (
		<ul className={styles.NavigationItems}>
			<NavigationItem exact link='/' active={true}>
				Burger Builder
			</NavigationItem>
			<NavigationItem link='/orders'>Orders</NavigationItem>
		</ul>
	)
}

export default NavigationItems
