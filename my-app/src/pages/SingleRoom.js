import React, { Component } from 'react'

import { Link } from 'react-router-dom';

import Banner from '../component/Banner';
import Hero from '../component/Hero';
import defaultBcg from '../images/room-1.jpeg';

import { RoomContext } from '../context';

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext;

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);

        if(!room) {
            return <div className="error">
                <h3>no such room could be found</h3>
                <Link to="/" className="btn-primary">back to rooms</Link>
            </div>
        }

        const { 
            name, 
            description, 
            capacity, 
            size, 
            price, 
            extras, 
            breackfast, 
            pets, 
            images 
        } = room;

        return (
            <Hero hero="roomsHero">
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                    </Link>
                </Banner>
            </Hero>
        )
    }
}
