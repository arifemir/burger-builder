import React from 'react';
import styles from './Layout.module.css'
import Fragment from "../../../hoc/Fragment";
import Toolbar from "../../Navigation/Toolbar/Toolbar";
import SideDrawer from "../../Navigation/SideDrawer/SideDrawer";

const Layout = ({children}) =>(
  <Fragment>
    <Toolbar/>
    <SideDrawer/>
    <main className={styles.Content} > {children} </main>
  </Fragment>
)
export default Layout;
