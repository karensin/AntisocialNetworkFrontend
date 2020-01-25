import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap'
// import SignUp from './SignUp.js';
import { Form, Button, Col } from 'react-bootstrap/';

class CTA extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }

    handleModal() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div className="popUp">
                <Button color="link" variant="success" className="px-md-4 md greenButton" onClick={() => { this.handleModal() }}>
                    Get early access
                    </Button>
                <Modal show={this.state.show} onHide={() => this.handleModal()}>
                    <Modal.Header closeButton > Head Part</Modal.Header>
                    <Modal.Body>
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
                            <Button type="submit">Submit form</Button>

                        </Form >
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div >
        );
    }

}
export default CTA;