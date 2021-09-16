import React from 'react';
import Container from 'react-bootstrap/Container';
import PageHeading from './content/PageHeading';
import PaginationContent from './content/PaginationContent';
import ProductGrid from './content/ProductGrid';
import Footer from './content/Footer';


function News() {
    return (
        <>
            <div className="wrapper">
                <Container>
                    <PageHeading content="News" /> 
                    <PaginationContent />
                    <ProductGrid />
                    <PaginationContent />
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default News
