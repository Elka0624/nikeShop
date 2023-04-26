import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import krasofka_runnig from '../../Assent/nike_krasofka_running.jpeg';
import krasofka_pegaus from '../../Assent/nike_krasofka_Pegaus.jpg';
import krasofka_jordan from '../../Assent/nike_krasofka_jordan.jpg'
import './Carousel.css'

class DemoCarousel extends Component {
    render() {
        return (
            <div className="container">
                <div className="ona">
                    <Carousel autoPlay infiniteLoop showArrows={true} className='car'>
                        <div>
                            <img src={krasofka_runnig} className='imgCarousel'/>
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img src={krasofka_pegaus} className='imgCarousel'/>
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src={krasofka_jordan} className='imgCarousel'/>
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>
                </div>
            </div>
        );
    }
};

export default DemoCarousel