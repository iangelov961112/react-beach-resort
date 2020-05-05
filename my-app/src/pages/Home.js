import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../component/Hero';
import Banner from '../component/Banner';
import Services from '../component/Services';
import FeaturedRooms from '../component/FeaturedRooms';

import Button from '../component/StyledHero';

export default function Home () {
    return (
        <>
            <Hero>
                <Banner title="lexurious rooms" subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">
                        out rooms
                    </Link>
                </Banner>
            </Hero>

            <Services />
            <FeaturedRooms />
            <Button>Hello</Button>
        </>
    );
}