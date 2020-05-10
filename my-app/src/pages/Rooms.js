import React from 'react'
import { Link } from 'react-router-dom';

import Hero from '../component/Hero';
import Banner from '../component/Banner';

import RoomContainer from '../component/RoomContainer';

function Rooms() {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="out rooms">
                    <Link to="/" className="btn-primary">return home</Link>
                </Banner>
            </Hero>

            <RoomContainer />
        </>

    )
}

export default Rooms;