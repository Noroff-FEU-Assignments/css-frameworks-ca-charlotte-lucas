import React from 'react';
import Button from 'react-bootstrap/Button';

function ButtonPrimary(props) {
    return (
        <Button variant="primary" type="submit"> {props.children} </Button>
    );
}

export default ButtonPrimary;
