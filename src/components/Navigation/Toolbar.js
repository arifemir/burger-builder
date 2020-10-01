import React from 'react';

import styles from './Toolbar.module.css'
import NavigationItems from "./NavigationItems";
import DrawerToggle from "./DrawerToggle";

const Toolbar = (props) => (
  <header className={styles.Toolbar}>
    <DrawerToggle click={props.toggle} height="100%"/>
    <div>
      <nav>
        <NavigationItems isAuthenticated={props.isAuth}/>
      </nav>
    </div>
  </header>
);


export default Toolbar;
