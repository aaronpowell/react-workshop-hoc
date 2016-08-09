import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    render() {
        const { onLogin } = this.props;

        return (
            <form onSubmmit={(e) => (e.preventDefault(), onLogin(this.state.username, this.state.password))}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" value={this.state.username} onChange={(e) => this.setState({ 'username': e.target.value })} />
                </div>

                <div>
                    <label htmlFor="Password">Password: </label>
                    <input type="text" id="Password" value={this.state.password} onChange={(e) => this.setState({ 'password': e.target.value })} />
                </div>

                <button type="submit">Login</button>
            </form>
        );
    }
}