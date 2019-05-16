import React, { Component } from 'react';

class LoginForm extends Component {
    state = {
        email: '',
        pwd: '',
        emailError: false,
        pwdError: false
    }

    onChange = e => {
        console.log('ONCHAMGE', e.target.value)
        const name = e.target.name;
        const value = e.target.value;
        console.log('name: ', name);
        console.log('value: ', value);
        this.setState(() => ({ [name]: value }))
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        console.log('state: ', this.state)
        let validemail = this.state.email;

        console.log('on form submit: ')
        console.log('email: ', validemail);
        console.log('state email: ', this.state.email);

        if (!this.state.email || !validemail.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g)) {
            console.log('email not valid')
            this.setState(() => ({ emailError: true }));
        }
        else {
            console.log('valid email ==========');
            this.setState(() => ({ emailError: false }));
        }
        // TODO: enable password validation to check min number of characters

        // TODO: send form data to consumer

        // TODO: cleanup, refactor, remove comments
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type='text'
                        placeholder="email"
                        name="email"
                        ref="name"
                        onChange={e => this.onChange(e)}
                    />
                    <input
                        type='text'
                        placeholder="password"
                        name="pwd"
                        ref="name"
                        onChange={e => this.onChange(e)}
                    />
                    <button onClick={e => this.onFormSubmit(e)}>
                        Log In
                    </button>
                </form>
                <div>
                    Not a member yet?
                    <a href="#">Sign Up</a>
                </div>
            </div>
        )
    }
}

export default LoginForm;