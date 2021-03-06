import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Auth.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import { auth } from '../../store/actions';
import { checkValidity } from '../../shared/utility';

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email address',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password',
        },
        value: '',
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    isSignUp: true,
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const { value } = event.target;
    this.setState((prevState) => {
      const controls = {
        ...prevState.controls,
        [inputIdentifier]: {
          ...prevState.controls[inputIdentifier],
          value,
          valid: checkValidity(
            value,
            prevState.controls[inputIdentifier].validation,
          ),
          touched: true,
        },
      };
      const formIsValid = Object.values(controls).every(element =>
        (element.validation ? element.valid : true));
      return { controls, formIsValid };
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    const email = this.state.controls.email.value;
    const password = this.state.controls.password.value;
    this.props.onAuth(email, password, this.state.isSignUp, this.props.hasBurger, this.props.history);
    // when not using thunk but saga onAuth isn't a promise anymore, so you can't chain with .then
  };

  switchAuthModeHandler = () => {
    this.setState(prevState => ({ isSignUp: !prevState.isSignUp }));
  };

  render() {
    const formElements = Object.entries(this.state.controls).map(([k, v]) => ({
      id: k,
      config: v,
    }));
    return (
      <div className={classes.Auth}>
        {this.props.error && <p>{this.props.error.message}</p>}
        {this.props.loading ? (
          <Spinner />
        ) : (
          <form onSubmit={this.submitHandler}>
            {formElements.map(element => (
              <Input
                key={element.id}
                elementType={element.config.elementType}
                elementConfig={element.config.elementConfig}
                value={element.config.value}
                changed={event => this.inputChangedHandler(event, element.id)}
                invalid={!element.config.valid}
                shouldValidate={element.config.validation}
                touched={element.config.touched}
              />
            ))}
            <Button
              btnType="Success"
              type="submit"
              disabled={!this.state.formIsValid}
            >
              SUBMIT
            </Button>
          </form>
        )}
        <Button btnType="Danger" clicked={this.switchAuthModeHandler}>
          SWITCH TO {this.state.isSignUp ? 'SIGNIN' : 'SIGNUP'}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const hasBurger = Object.values(state.burgerBuilder.ingredients || {}).some(el => el > 0);
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    hasBurger,
  };
};

const mapDispatchToProps = dispatch => ({
  onAuth: (email, password, isSignUp, hasBurger, history) =>
    dispatch(auth(email, password, isSignUp, hasBurger, history)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
