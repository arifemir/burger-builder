import React, {Component} from 'react';
import Button from "../components/util/Button";
import Input from "../components/UI/Input";
import { auth } from '../store/actions';
import {connect} from "react-redux";
import Spinner from "../components/UI/Spinner";
import { Redirect } from "react-router-dom";

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Mail address'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    },
    isSignup: true
  }

  checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) return true;
    if (rules.required) isValid = value.trim() !== '' && isValid;
    if (rules.minLength) isValid = value.length >= rules.minLength && isValid;
    if (rules.maxLength) isValid = value.length <= rules.maxLength && isValid;
    if (rules.isEmail) {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      isValid = pattern.test(value) && isValid;
    }
    return isValid
  }

  inputChageHandler = (event) => {
    const controlName = event.target.name
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true
      }
    }

    this.setState({controls: updatedControls})
  }

  formSubmitHandler = (event) => {
    event.preventDefault()
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup)
  }

  switchAuthModeHandler = () => {
    this.setState((prevState) => {
      return {
        isSignup: !prevState.isSignup
      }
    })
  }

  render() {
    const { loading, error } = this.props
    const formElementsArray = []
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      })
    }

    const form = formElementsArray.map(element =>  (
        <Input
          name={element.id}
          key={element.id}
          elementType={element.config.elementType}
          elementConfig={element.config.elementConfig}
          value={element.config.value}
          invalid={!element.config.valid}
          shouldValidate={element.config.validation}
          touched={element.config.touched}
          onChange={(event) => this.inputChageHandler(event)}
        />)
    )

    const content = error ? <h1 className='text-danger font-weight-bold'>{error}</h1> : (
      loading ? <Spinner/> : <>
        <div className='d-flex flex-column align-items-center'>
          <div>
            <h1 className='text-primary'>{!this.state.isSignup ? 'Sign-In' : 'Sign-Up'}</h1>
          </div>
          <div className='w-100'>
            {form}
            <form onSubmit={this.formSubmitHandler} className='d-flex align-items-center justify-content-center'>
              <Button btnType="Success">SUBMIT</Button>
            </form>
          </div>
        </div>
        <Button onClick={this.switchAuthModeHandler} type="danger">SWITCH TO {!this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>
      </>
    )

    let authRedirect = this.props.isAuthenticated ?  <Redirect to={this.props.isAuthForOrder ? '/checkout' : '/'}/> : null

    return (
        <div className='container d-flex align-items-center flex-column justify-content-around h-100'>
          { authRedirect }
          { content }
        </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) => dispatch(auth(email, password, isSignup))
  }
}

const mapStateToProps = state => {
  const {loading, error, idToken, isAuthForOrder} = state.authReducer
  return {
    loading, error, isAuthenticated: idToken !== null, isAuthForOrder
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
