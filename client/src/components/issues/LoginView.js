import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Checkbox, Form } from 'semantic-ui-react'
import LoginForm from "./LoginForm"

class LoginView extends Component {
    render() {
        return (
            <div>
                <LoginForm/>
            </div>
        );
    }
}

export default LoginView;