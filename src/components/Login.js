import React, { Component } from "react";
import '../Login.css';

export default class Login extends Component {
    render() {
        return (
            <form className="formLabel">
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                
            </form>
        );
    }
}