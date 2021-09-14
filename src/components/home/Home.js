import React from 'react';

import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from '../../carouselImages/carousel-1.jpg';
import CarouselImage2 from '../../carouselImages/carousel-2.jpg';
import CarouselImage3 from '../../carouselImages/carousel-3.jpg';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewsImage1 from '../../newsImages/news-1.jpg';
import NewsImage2 from '../../newsImages/news-2.jpg';
import NewsImage3 from '../../newsImages/news-3.jpg';

function Home() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={CarouselImage1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={CarouselImage2} alt="Second slide" /> 
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={CarouselImage3} alt="Third slide" />
                </Carousel.Item>
            </Carousel>  
            <Container>
                <h1>We do YAY things</h1>

                <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. 
                    Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, 
                    consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. 
                    Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>


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


                <div className="d-none d-md-block">
                    <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="first" title="First">
                            <Row>
                                <Col xs={3}>
                                    <img className="d-block w-100" src={NewsImage1} />
                                </Col>
                                <Col xs={9}>
                                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. 
                                        Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. 
                                        Sed condimentum mattis rhoncus. </p>
                                    <p>Share</p>
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-twitter"></i>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="second" title="Second">
                            <Row>
                                <Col xs={3}>
                                    <img className="d-block w-100" src={NewsImage2} />
                                </Col>
                                <Col xs={9}>
                                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. 
                                        Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. 
                                        Sed condimentum mattis rhoncus. </p>
                                    <p>Share</p>
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-twitter"></i>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="third" title="Third">
                            <Row>
                                <Col xs={3}>
                                    <img className="d-block w-100" src={NewsImage3} />
                                </Col>
                                <Col xs={9}>
                                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. 
                                        Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. 
                                        Sed condimentum mattis rhoncus. </p>
                                    <p>Share</p>
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-twitter"></i>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        </>
    );
}

export default Home;
