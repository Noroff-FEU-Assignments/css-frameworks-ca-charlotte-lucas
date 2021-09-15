import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CardContent(props) {
    return (
        <Card>
            {props.children}
            <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button>More</Button>
            </Card.Body>
        </Card>
    );
}

export default CardContent;
