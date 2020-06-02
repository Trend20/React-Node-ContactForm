import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
 
class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            message:'',
        }
    }
    onNameChange(event){
        this.setState({
            name: event.target.value,
        });
    }

    onEmailChange(event){
        this.setState({
            email: event.target.value,
        });
    }

    onMessageChange(event){
        this.setState({
            message: event.target.value,
        });
    }
    handleSubmit(event){
        event.preventDefault();

        axios({
            method: 'POST',
            url: 'http://localhost:3002/send',
            data: 'this.state',
        }).then((response) =>{
            if(response.data.status === 'success'){
                alert('Message sent');
                this.resetForm();
            }else if(response.data.status === 'fail'){
                alert('Message failed to send');
            }
        })
    }
    resetForm(){
        this.setState({
            name:'',
            email:'',
            message:'',
        });
    }
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
                        className="form-control" 
                        value={this.state.email}
                        onChange={this.onEmailChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea
                        placeholder="Message"
                        rows="5"
                        className="form-control"
                        value={this.state.message}
                        onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
 
export default Form;