import React from 'react';
import Paragraph from './Paragraph';
import TabImage1 from './images/tabImages/tab-1.jpg';
import TabImage2 from './images/tabImages/tab-2.jpg';
import TabImage3 from './images/tabImages/tab-3.jpg';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ShareIcons from './ShareIcons';

function AccordionContent() {
    return (
        <Accordion defaultActiveKey="0" className="d-md-none">
            <Card className="accordionCard">
                <Card.Header className="accordionCard__header">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        First
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body className="accordionCard__body">

                    <Paragraph>Morbi eget efficitur turpis. Vivamus pellentesque tortor 
                        massa, venenatis pharetra leo laoreet a. Nullam non eleifend 
                        justo, a ullamcorper turpis. Cras vehicula pharetra lectus non 
                        maximus. Sed condimentum mattis rhoncus. </Paragraph>

                    <img className="d-block w-100" src={TabImage1} alt="" />
                    <div className="shareIconsAccordion">
                        <ShareIcons />
                    </div>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="accordionCard">
                <Card.Header className="accordionCard__header">
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Second
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body className="accordionCard__body">

                    <Paragraph>Morbi eget efficitur turpis. Vivamus pellentesque tortor 
                        massa, venenatis pharetra leo laoreet a. Nullam non eleifend 
                        justo, a ullamcorper turpis. Cras vehicula pharetra lectus non 
                        maximus. Sed condimentum mattis rhoncus. </Paragraph>

                    <img className="d-block w-100" src={TabImage2} alt="" />
                    <div className="shareIconsAccordion">
                        <ShareIcons />
                    </div>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="accordionCard">
                <Card.Header className="accordionCard__header">
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Third
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                <Card.Body className="accordionCard__body">

                    <Paragraph>Morbi eget efficitur turpis. Vivamus pellentesque tortor 
                        massa, venenatis pharetra leo laoreet a. Nullam non eleifend 
                        justo, a ullamcorper turpis. Cras vehicula pharetra lectus non 
                        maximus. Sed condimentum mattis rhoncus. </Paragraph>

                    <img className="d-block w-100" src={TabImage3} alt="" />
                    <div className="shareIconsAccordion">
                        <ShareIcons />
                    </div>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default AccordionContent;
