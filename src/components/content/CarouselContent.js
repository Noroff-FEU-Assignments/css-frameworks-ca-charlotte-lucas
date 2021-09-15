import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImg1 from './images/carouselImages/carousel-1.jpg';
import CarouselImg2 from './images/carouselImages/carousel-2.jpg';
import CarouselImg3 from './images/carouselImages/carousel-3.jpg';

function CarouselContent() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={CarouselImg1}
                alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={CarouselImg2}
                alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={CarouselImg3}
                alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselContent;
