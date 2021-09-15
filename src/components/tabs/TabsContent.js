import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import NewsImage1 from '../../newsImages/news-1.jpg';
import NewsImage2 from '../../newsImages/news-2.jpg';
import NewsImage3 from '../../newsImages/news-3.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TabsContent() {
    return (
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
    );
}

export default TabsContent;
