import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap'
import SignUp from './SignUp.js';
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

                        <SignUp />
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div >
        );
    }

}
export default CTA;