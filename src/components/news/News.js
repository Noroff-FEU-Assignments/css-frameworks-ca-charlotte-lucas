import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import NewsImage1 from '../../newsImages/news-1.jpg';
import NewsImage2 from '../../newsImages/news-2.jpg';
import NewsImage3 from '../../newsImages/news-3.jpg';
import NewsImage4 from '../../newsImages/news-4.jpg';
import NewsImage5 from '../../newsImages/news-5.jpg';
import NewsImage6 from '../../newsImages/news-6.jpg';
import NewsImage7 from '../../newsImages/news-7.jpg';
import NewsImage8 from '../../newsImages/news-8.jpg';



function News() {
    return (
        <Container>
            <h1>News</h1>
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                    <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
                </ButtonGroup>
            </ButtonToolbar>


            <Row>
                <Col md={6} lg={3}>
                    <Card>
                        <Card.Img variant="top" src={NewsImage1} />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button variant="primary">More</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={NewsImage2} />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button variant="primary">More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3}>
                    <Card>
                        <Card.Img variant="top" src={NewsImage3} />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button variant="primary">More</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={NewsImage4} />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button variant="primary">More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="d-none d-md-block">
                    <Card>
                        <Card.Img variant="top" src={NewsImage5} />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button variant="primary">More</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={NewsImage6} />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button variant="primary">More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="d-none d-md-block">
                    <Card>
                        <Card.Img variant="top" src={NewsImage7} />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button variant="primary">More</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={NewsImage8} />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button variant="primary">More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                    <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
                </ButtonGroup>
            </ButtonToolbar>

        </Container>
    );
}

export default News;
