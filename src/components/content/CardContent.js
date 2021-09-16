import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CardContent(props) {
    return (
        <Card className="productCard">
            {props.children}
            <Card.Body className="productCard__body">
                <Card.Title className="productCard__body--title">Nunc porttitor vel</Card.Title>
                <Card.Text className="productCard__body--text">
                Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="productCard">More</Button>
            </Card.Body>
        </Card>
    );
}

export default CardContent;
