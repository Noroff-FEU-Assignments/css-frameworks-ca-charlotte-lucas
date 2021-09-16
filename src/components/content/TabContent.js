import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TabImage1 from './images/tabImages/tab-1.jpg';
import TabImage2 from './images/tabImages/tab-2.jpg';
import TabImage3 from './images/tabImages/tab-3.jpg';
import Paragraph from './Paragraph';
import ShareIcons from './ShareIcons';

function TabContent() {
    return (
        <div className="d-none d-md-block">
            <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="first" title="First">
                    <Row>
                        <Col>
                            <img className="d-block w-100" src={TabImage1} alt="" />
                        </Col>
                        <Col xs={8}>
                            <Paragraph>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, 
                                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a 
                                ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed 
                                condimentum mattis rhoncus. </Paragraph>
                            <div className="shareIconsTabs">
                                <ShareIcons />
                            </div>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="second" title="Second">
                    <Row>
                        <Col>
                            <img className="d-block w-100" src={TabImage2} alt="" />
                        </Col>
                        <Col xs={8}>
                            <Paragraph>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, 
                                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a 
                                ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed 
                                condimentum mattis rhoncus. </Paragraph>
                            <div className="shareIconsTabs">
                                <ShareIcons />
                            </div>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="third" title="Third">
                    <Row>
                        <Col>
                            <img className="d-block w-100" src={TabImage3} alt="" />
                        </Col>
                        <Col xs={8}>
                            <Paragraph>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, 
                                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a 
                                ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed 
                                condimentum mattis rhoncus. </Paragraph>
                            <div className="shareIconsTabs">
                                <ShareIcons />
                            </div>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </div>
    )
}

export default TabContent
