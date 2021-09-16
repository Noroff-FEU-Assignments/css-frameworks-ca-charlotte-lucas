import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageHeading from './content/PageHeading';
import ContactForm from './content/ContactForm';
import ContactDetails from './content/ContactDetails';
import Footer from './content/Footer';

function Contact() {
    return (
        <>
            <div className="wrapper">
                <Container>
                    <Row>
                        <Col xs={{ order: 'last' }} md={8} lg={6}>
                            <PageHeading content="Submit your details" />
                            <ContactForm />
                        </Col>
                        <Col md={{ order: 'last' }}>
                            <ContactDetails />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default Contact
