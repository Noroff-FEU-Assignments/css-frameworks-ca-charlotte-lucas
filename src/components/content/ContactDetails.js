import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContactDetails() {
    return (
        <div className="contactDetails">
            <Row>
                <Col xs={1}><i className="fas fa-envelope contactDetails__i"></i></Col>
                <Col><p className="contactDetails__p">hello@yay.com</p></Col>
            </Row>
            <Row>
                <Col xs={1}><i className="fas fa-phone contactDetails__i"></i></Col>
                <Col><p className="contactDetails__p">123 456 7890</p></Col>
            </Row>
            <Row>
                <Col xs={1}><i className="fas fa-map-marker-alt contactDetails__i"></i></Col>
                <Col>
                    <p className="contactDetails__p--address">123 Some Street</p>
                    <p className="contactDetails__p--address">Somewhere</p>
                    <p className="contactDetails__p--address">Some City</p>
                    <p className="contactDetails__p--address">10000</p>
                </Col>
            </Row>
        </div>
    );
}

export default ContactDetails;
