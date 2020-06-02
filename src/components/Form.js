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
                </form>
            </div>
        );
    }
}
 
export default Form;