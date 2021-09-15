import React from 'react';
import Container from 'react-bootstrap/Container';
import PageHeading from './content/PageHeading';
import PaginationContent from './content/PaginationContent';
import ProductGrid from './content/ProductGrid';
import Footer from './content/Footer';


function News() {
    return (
        <>
            <Container>
                <PageHeading content="News" /> 
                <PaginationContent />
                <ProductGrid />
                <PaginationContent />
            </Container>
            <Footer />
        </>
    )
}

export default News
