import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function ContactForm() {
    return (
        <Form className="contactForm">
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Website</Form.Label>
                <InputGroup.Prepend>
                    <InputGroup.Text  className="d-md-none">https://</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="website" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="6" />
            </Form.Group>
            
            <Form.Group>
                <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
            </Form.Group>
            
            <Button variant="disabled" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default ContactForm;
