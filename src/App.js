import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';

const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        firstName: '',
        lastName: '',
        email: ''
      },
      errors: {
        firstName: false,
        lastName: false,
        email: false,
        invalidEmail: false
      }
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.blurHandler = this.blurHandler.bind(this);
    this.submit = this.submit.bind(this);
  }

  changeHandler(e) {
    let errors = this.state.errors;
    errors[e.target.name] = false;
    if (e.target.name === 'email') {
      errors.invalidEmail = false;
    }
    let person = this.state.person;
    person[e.target.name] = e.target.value;
    this.setState({ person, errors });
  }

  blurHandler(e) {
    let errors = this.state.errors;
    if (!e.target.value) {
      errors[e.target.name] = true;
    }
    if (e.target.name === 'email' && e.target.value) {
      if (!emailReg.test(e.target.value)) {
        errors.invalidEmail = true;
      }
    }
    this.setState({ errors });
  }


  submit() {
    let hasError = false;
    let errors = this.state.errors;
    Object.keys(this.state.person).forEach(key => {
      if (!this.state.person[key]) {
        hasError = true;
        errors[key] = true;
      }
    })
    if (!hasError) {
      alert('Good to go');
    } else {
      this.setState({ errors })
    }
  }

  render() {
    return (
      <div className="App">
        <Form
          submit={this.submit}
          change={this.changeHandler}
          blur={this.blurHandler}
          errors={this.state.errors}
          person={this.state.person} />
      </div>
    );
  }
}

export default App;
