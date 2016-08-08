import React, { Component } from 'react';

export default class ContactUsForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            comment: ''
        };
    }

    render() {
        return (
            <form onSubmit={e => (e.preventDefault(), this.props.onSubmit(this.state))}>
                <fieldset>
                    <div className="field-group">
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="name" onChange={e => this.setState({ 'name': e.target.value })} value={this.state.name} />
                    </div>

                    <div className="field-group">
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" onChange={e => this.setState({ 'email': e.target.value })} value={this.state.email} />
                    </div>

                    <div className="field-group">
                        <label htmlFor="comment">Comment: </label>
                        <textarea id="comment" onChange={e => this.setState({ 'comment': e.target.value })} value={this.state.comment} />
                    </div>
                </fieldset>

                <fieldset>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        );
    }
}
