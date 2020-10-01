import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logout} from '../store/actions/index';
import { Redirect } from "react-router-dom";

class Logout extends Component {

  componentDidMount() {
    this.props.onLogout();
  }

  render() {
    return <Redirect to='/'/>
  }
}

const mapDispatchToProps = dispatch => {
	return {
	    onLogout: () => dispatch(logout())
	}
}

export default connect(null, mapDispatchToProps)(Logout);
