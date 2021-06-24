import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

const Error = () => {
    return (
        <Hero>
            <Banner
             title='404 Error'
             subtitle='No rooms found'>
                 <Link to='/' className='btn-primary'>Back to Home</Link>
             </Banner>
        </Hero>
    );
};

export default Error;