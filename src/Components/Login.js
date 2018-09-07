import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends React.Component {
    render() {
        return (
            <div>
                <Form className="container">
                    <img clasName='logo' src="https://inspirationfeeed.files.wordpress.com/2013/01/book_lovers1.png" />
                    <h4 className="logo-heading">Papier</h4>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                    </FormGroup>
                    <Button className='loginButton btn-block'>Login</Button>
                </Form>
            </div>
        );
    }
}

export default Login;