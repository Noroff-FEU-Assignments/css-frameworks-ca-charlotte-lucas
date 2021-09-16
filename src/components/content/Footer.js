import React from 'react';
import Container from 'react-bootstrap/Container';


function Footer() {
    return (
        <footer className="footer">
            <Container>
                <div className="flexContainer">
                    <div className="footer__icons">
                        <i className="fab fa-vimeo-v footer__icons--i"></i>
                        <i className="fab fa-youtube footer__icons--i"></i>
                    </div>
                    <div className="footer__links">
                        <p className="footer__links--p">hello@yay.com</p>
                        <p className="footer__links--p">Copyright 2020</p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
