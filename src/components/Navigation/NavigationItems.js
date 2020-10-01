import React from 'react'
import NavigationItem from './NavigationItem'
import styles from './NavigationItems.module.css'
const NavigationItems = (props) => {
	return (
		<ul className={styles.NavigationItems}>
			<NavigationItem exact link='/' active={true}>
				Burger Builder
			</NavigationItem>
			<NavigationItem link='/orders'>Orders</NavigationItem>
      {props.isAuthenticated ?
        <NavigationItem link='/logout'>Logout</NavigationItem>
        :
        <NavigationItem link='/auth'>Auth</NavigationItem>
      }
		</ul>
	)
}

export default NavigationItems
