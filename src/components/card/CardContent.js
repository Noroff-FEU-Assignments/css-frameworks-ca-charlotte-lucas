import React from 'react';
import Card from 'react-bootstrap/Card';
import ButtonPrimary from '../buttons/ButtonPrimary';


function CardContent(props) {
    return (
        <Card>
            {props.children}
            <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                <ButtonPrimary>More</ButtonPrimary>
            </Card.Body>
        </Card>
    );
}

export default CardContent;
