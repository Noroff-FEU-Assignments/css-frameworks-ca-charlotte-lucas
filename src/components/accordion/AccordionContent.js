import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NewsImage1 from '../../newsImages/news-1.jpg';
import NewsImage2 from '../../newsImages/news-2.jpg';
import NewsImage3 from '../../newsImages/news-3.jpg';

function AccordionContent() {
    return (
        <Accordion defaultActiveKey="0" className="d-md-none">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                First
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. 
                                Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. 
                                Sed condimentum mattis rhoncus. </p>
                                <img className="d-block w-100" src={NewsImage1} />
                                <p>Share</p>
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Second
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. 
                                Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. 
                                Sed condimentum mattis rhoncus. </p>
                                <img className="d-block w-100" src={NewsImage2} />
                                <p>Share</p>
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                Third
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. 
                                Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. 
                                Sed condimentum mattis rhoncus. </p>
                                <img className="d-block w-100" src={NewsImage3} />
                                <p>Share</p>
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
    );
}

export default AccordionContent;