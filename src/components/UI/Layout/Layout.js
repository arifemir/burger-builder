import React from 'react';
import styles from './Layout.module.css'
import Fragment from "../../../hoc/Fragment";
import Toolbar from "../../Navigation/Toolbar/Toolbar";

const Layout = ({children}) =>(
  <Fragment>
    <Toolbar/>
    <main className={styles.Content} > {children} </main>
  </Fragment>
)
export default Layout;
