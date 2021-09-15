import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonPagination from '../../buttons/ButtonPagination';
import Card from 'react-bootstrap/Card';
import CardContent from '../../card/CardContent';
import NewsImage1 from '../../../newsImages/news-1.jpg';
import NewsImage2 from '../../../newsImages/news-2.jpg';
import NewsImage3 from '../../../newsImages/news-3.jpg';
import NewsImage4 from '../../../newsImages/news-4.jpg';
import NewsImage5 from '../../../newsImages/news-5.jpg';
import NewsImage6 from '../../../newsImages/news-6.jpg';
import NewsImage7 from '../../../newsImages/news-7.jpg';
import NewsImage8 from '../../../newsImages/news-8.jpg';



function News() {
    return (
        <Container>
            <h1>News</h1>
            <ButtonPagination />

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


            <ButtonPagination />

        </Container>
    );
}

export default News;
