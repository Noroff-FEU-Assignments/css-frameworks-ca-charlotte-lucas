import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <i className="fab fa-vimeo-v"></i>
                        <i className="fab fa-youtube"></i>
                    </Col>
                    <Col><p>hello@yay.com</p></Col>
                    <Col><p>Copyright 2020</p></Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
