import React, { Component } from 'react'

import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'; 


class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free cocktailes",
                info: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free shittle",
                info: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            },
        ]
    }
    render() {
        return (
            <section className="services">

                <Title title="services" />
                <div className="services-center">
                    {
                        this.state.services.map((service, index) => (
                            <article key={index} className="service">
                                <span>{service.icon}</span>
                                <h6>{service.title}</h6>
                                <p>{service.info}</p>
                            </article>
                        ))
                    }
                </div>
            </section>
        )
    }
}

export default Services;