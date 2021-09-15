import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from '../../carouselImages/carousel-1.jpg';
import CarouselImage2 from '../../carouselImages/carousel-2.jpg';
import CarouselImage3 from '../../carouselImages/carousel-3.jpg';

function CarouselContent() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={CarouselImage1} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={CarouselImage2} alt="" /> 
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={CarouselImage3} alt="" />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselContent;
