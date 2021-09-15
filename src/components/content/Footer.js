import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer>
            <Row>
                <Col>
                    <i className="fab fa-vimeo-v"></i>
                    <i className="fab fa-youtube"></i>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>hello@yay.com</p>
                </Col>
                <Col>
                    <p>Copyright 2020</p>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;
