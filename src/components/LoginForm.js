import React, { Component } from 'react';

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    }

    onChange = (e) => {
        console.log('ONCHAMGE', e.target.value)
        const email = e.target.value;
        // if (!email || email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g)) {
            this.setState(() => ({ email }))
        // }
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type='text'
                        placeholder="email"
                        onChange={e => this.onChange(e)}
                    />
                    <input
                        type='password'
                        placeholder="password"
                        onChange={e => this.onChange(e)}
                    />
                    <button>
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