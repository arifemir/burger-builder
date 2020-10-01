import React from 'react';
import styles from './Layout.module.css'
import Fragment from "../hoc/Fragment";
import Toolbar from "../Navigation/Toolbar";
import SideDrawer from "../Navigation/SideDrawer";
import { connect } from 'react-redux'

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
        <Toolbar isAuth={this.props.isAuthenticated} toggle={this.sideDrawerClosedHandler} />
        <SideDrawer isAuth={this.props.isAuthenticated} sideDrawerShowState={this.state.showSideDrawer} toggle={this.sideDrawerClosedHandler}  />
        <main className={styles.Content}> {this.props.children} </main>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.idToken !== null
  }
}

export default connect(mapStateToProps)(Layout);
