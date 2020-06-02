import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
class Form extends Component {
    render() { 
        return (
            <div className="container">
                <form id="contact-form" method="POST">
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" placeholder="Enter name" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <input type="text" placeholder="Message" />
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Form;