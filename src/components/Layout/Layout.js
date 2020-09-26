import React from 'react';
import styles from './Layout.module.css'
import Fragment from "../hoc/Fragment";
import Toolbar from "../Navigation/Toolbar";
import SideDrawer from "../Navigation/SideDrawer";

class Layout extends React.Component {

  state = {
    showSideDrawer:false
  }

  sideDrawerClosedHandler = () => {
    this.setState((prevState)=>{
      console.log(!prevState)
      return {showSideDrawer:!prevState.showSideDrawer}
    })
  }

  render() {
    return (
      <Fragment>
        <Toolbar toggle={this.sideDrawerClosedHandler} />
        <SideDrawer sideDrawerShowState={this.state.showSideDrawer} toggle={this.sideDrawerClosedHandler}  />
        <main className={styles.Content}> {this.props.children} </main>
      </Fragment>
    )
  }
}
export default Layout;
