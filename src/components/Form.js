import React from 'react';

export default function Form(props) {
    let firstNameError;
    if(props.errors.firstName) {
        firstNameError = <span>First name is required</span>
    }
    let lastNameError;
    if(props.errors.lastName) {
        lastNameError = <span>Last name is required</span>
    }
    let emailRequired;
    if(props.errors.email) {
        emailRequired = <span>Email is required</span>
    }
    let invalidEmail;
    if(props.errors.invalidEmail) {
        invalidEmail = <span>Email is not valid</span>
    }

    function toggleDisable() {
        return Object.keys(props.errors).some(key => props.errors[key]);
    }

    return (
        <form>
            <input
            onBlur={props.blur}
            value={props.person.firstName}
            onChange={props.change} 
            type="text" 
            placeholder="First Name" 
            name="firstName" />
            {firstNameError}
            <br />
            <input 
            onBlur={props.blur}
            value={props.person.lastName}
            onChange={props.change}
            type="text" 
            placeholder="Last Name" 
            name="lastName" />
            {lastNameError}
            <br />
            <input 
            onBlur={props.blur}
            value={props.person.email}
            onChange={props.change}
            type="text" 
            placeholder="you@example.com" 
            name="email" />
            {emailRequired}
            {invalidEmail}
            <br />
            <button onClick={props.submit} disabled={toggleDisable()} type="button">Submit</button>
        </form>
    )
}
