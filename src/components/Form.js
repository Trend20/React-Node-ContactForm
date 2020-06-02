import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
class Form extends Component {
    render() { 
        return (
            <div className="container">
                <form id="contact-form" 
                method="POST"
                onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input 
                        type="text" 
                        placeholder="Enter name"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input 
                        type="email" 
                        placeholder="Enter Email"
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <input 
                        type="text" 
                        placeholder="Message"
                        className="form-control" />
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Form;