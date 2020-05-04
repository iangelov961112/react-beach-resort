import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../component/Hero';
import Banner from '../component/Banner';


export default function Error() {
    return( 
        <Hero>
            <Banner title="404" subtitle="page not found">
                <Link to="/" className="btn-primary">return home</Link>
            </Banner>
        </Hero>
    )
}