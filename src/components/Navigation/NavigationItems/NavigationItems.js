import React from 'react';
import NavigationItem from "./NavigationItem/NavigationItem";
import styles from "./NavigationItems.module.css";
const NavigationItems = () => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link='/' active={true}>Burger Builder</NavigationItem>
      <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
