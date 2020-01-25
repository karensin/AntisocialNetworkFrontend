import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Col } from 'react-bootstrap/';

class SignUp extends Component {

    render() {
        return (
            <Form className="SignUp">
                <Form.Row>
                    <Col>
                        <Form.Label>First Name</Form.Label>

                        <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                        <Form.Label>Last Name</Form.Label>

                        <Form.Control placeholder="Last name" />
                    </Col>
                </Form.Row>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
              </Form.Text>
                </Form.Group>
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                />
            </Form >
        )
    }
}
export default SignUp;