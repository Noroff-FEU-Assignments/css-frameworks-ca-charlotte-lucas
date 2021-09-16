import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function ContactForm() {
    return (
        <Form className="contactForm">
            <Form.Group>
                <Form.Label className="contactForm__label">Name</Form.Label>
                <Form.Control type="name" />
            </Form.Group>

            <Form.Group>
                <Form.Label className="contactForm__label">Email</Form.Label>
                <Form.Control type="email" />
            </Form.Group>

            <Form.Group>
                <Form.Label className="contactForm__label">Website</Form.Label>
                <div className="contactForm__website">
                    <InputGroup.Prepend className="d-none d-md-block contactForm__website--prepend">
                        <InputGroup.Text>https://</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type="website" />
                </div>
            </Form.Group>

            <Form.Group>
                <Form.Label className="contactForm__label">Message</Form.Label>
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
