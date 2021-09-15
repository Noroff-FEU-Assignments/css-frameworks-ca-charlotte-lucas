import React from 'react';

import CarouselContent from './content/CarouselContent';
import PageHeading from './content/PageHeading';
import Paragraph from './content/Paragraph';
import TabContent from './content/TabContent';
import AccordionContent from './content/AccordionContent';
import Footer from './content/Footer';

function Home() {
    return (
        <>
           
            <CarouselContent />
            <PageHeading content="We do YAY things" />
            <Paragraph>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, 
            a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus 
            et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur 
            faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium 
            lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</Paragraph>
            <AccordionContent />
            <TabContent />
            <Footer />  
        </>
    );
}

export default Home;
