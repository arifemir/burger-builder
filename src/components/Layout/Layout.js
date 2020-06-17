import React from 'react';
import styles from './Layout.module.css'

const Layout = ({children}) =>
  <main className={styles.Content} > {children} </main>

export default Layout;
