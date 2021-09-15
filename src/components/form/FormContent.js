import React from 'react';
import Form from 'react-bootstrap/Form';
import ButtonPrimary from '../buttons/ButtonPrimary';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function FormContent() {
    return (
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
                <Form.Label htmlFor="inlineFormInputGroup"> Website </Form.Label>
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

            <ButtonPrimary> Submit </ButtonPrimary>
        </Form>
    );
}

export default FormContent;
