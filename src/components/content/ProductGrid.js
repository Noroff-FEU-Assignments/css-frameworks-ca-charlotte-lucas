import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardContent from './CardContent';
import Card from 'react-bootstrap/Card';
import NewsImage1 from './images/newsImages/news-1.jpg';
import NewsImage2 from './images/newsImages/news-2.jpg';
import NewsImage3 from './images/newsImages/news-3.jpg';
import NewsImage4 from './images/newsImages/news-4.jpg';
import NewsImage5 from './images/newsImages/news-5.jpg';
import NewsImage6 from './images/newsImages/news-6.jpg';
import NewsImage7 from './images/newsImages/news-7.jpg';
import NewsImage8 from './images/newsImages/news-8.jpg';

function ProductGrid() {
    return (
        <>
            <Row>
                <Col md={6} lg={3}>
                    <CardContent>
                        <Card.Img variant="top" src={NewsImage1} />
                    </CardContent>
                    <CardContent>
                        <Card.Img variant="top" src={NewsImage2} />
                    </CardContent> 
                </Col>
                <Col md={6} lg={3}>
                    <CardContent>
                        <Card.Img variant="top" src={NewsImage3} />
                    </CardContent>
                    <CardContent>
                        <Card.Img variant="top" src={NewsImage4} />
                    </CardContent>
                </Col>
                <Col md={6} lg={3} className="d-none d-md-block">
                    <CardContent>
                        <Card.Img variant="top" src={NewsImage5} />
                    </CardContent>
                    <CardContent>
                        <Card.Img variant="top" src={NewsImage6} />
                    </CardContent>
                </Col>
                <Col md={6} lg={3} className="d-none d-md-block">
                    <CardContent>
                        <Card.Img variant="top" src={NewsImage7} />
                    </CardContent>
                    <CardContent>
                        <Card.Img variant="top" src={NewsImage8} />
                    </CardContent>
                </Col>
            </Row>
        </>
    );
}

export default ProductGrid;
