import React from 'react';

import styles from './Toolbar.module.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = (props) => (
  <header className={styles.Toolbar}>
    <Logo/>
    <div>
      <nav>
        <NavigationItems/>
      </nav>

    </div>

  </header>
);


export default Toolbar;
