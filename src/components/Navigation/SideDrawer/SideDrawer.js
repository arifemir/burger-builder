import React from 'react';

import NavigationItems from "../NavigationItems/NavigationItems";
import BackDrop from "../../UI/BackDrop/BackDrop";
import Fragment from "../../../hoc/Fragment";

import styles from './SideDrawer.module.css'
import cn from 'classnames'
import DrawerToggle from "../DrawerToggle/DrawerToggle";


const SideDrawer = (props) => {
  const sideDrawerShowStyle = props.sideDrawerShowState ? styles.Open : styles.Close;
  return (
    <Fragment>
      <BackDrop show={props.sideDrawerShowState} clicked={props.toggle}  />
      <div className={cn(styles.SideDrawer, sideDrawerShowStyle)}>
        <DrawerToggle click={props.toggle} height="9%" />
        <nav>
          <NavigationItems/>
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
