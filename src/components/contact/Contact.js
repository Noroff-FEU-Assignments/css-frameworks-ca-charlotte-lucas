import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


function Contact() {
    return (
        <Container>
            <Row>
                <Col md={{ order: 'first' }}>
                    <h1>Submit your details</h1>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="inlineFormInputGroup">
                                Website
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text className="d-none d-md-block">https://</InputGroup.Text>
                                <FormControl id="inlineFormInputGroup" placeholder="" />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Col>
                <Col xs={{ order: 'first' }}>
                    <i className="fas fa-envelope"></i>
                    <p>hello@yay.com</p>
                    <i className="fas fa-phone"></i>
                    <p>123 456 7890</p>
                    <i className="fas fa-map-marker-alt"></i>
                    <p>123 Some Street
                        Somewhere
                        Some City
                        10000
                    </p>
                </Col>
            </Row> 
        </Container>
    );
}

export default Contact;
