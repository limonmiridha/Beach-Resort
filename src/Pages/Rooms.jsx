import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import RoomsContainer from '../components/RoomsContainer';

const Rooms = () => {
    return (
        <>
        <Hero hero='roomsHero'>
            <Banner
             title='our rooms'
             subtitle='choose a luxurious room'>
                 <Link to = '/' className='btn-primary'>Back to Home</Link>
             </Banner>
        </Hero>
        <RoomsContainer></RoomsContainer>
        </>
    );
};

export default Rooms;