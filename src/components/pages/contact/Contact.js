import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormContent from '../../form/FormContent';


function Contact() {
    return (
        <Container>
            <Row>
                <Col md={{ order: 'first' }}>
                    <h1>Submit your details</h1>
                    <FormContent />

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
