import React, { Component } from 'react';
import { CardGroup, Card, CardDeck, Image, Row, Col, Container, InputGroup, Form, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
// import HomeServiceCarousel from './homeServiceCarousel/homeServiceCarousel';
import WhyUs from './whyUs/whyUs';
import Process from './process/process';
import HomeService from './homeService/homeService';
import OurMechanics from './ourMechanics/ourMechanics';
import Footer from '../footer/footer';
import './home.css';
import MyNav from '../navbar/navbar';
import electr_car_1 from '../../images/electr_car_1.jpg'
import paint_gal_3 from '../../images/paint_gal_3.jpg';
import carp_caro_1 from '../../images/carp_caro_1.jpg';
import plum_car_1 from '../../images/plum_car_1.jpg';
import Fade from 'react-reveal'; import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';
import About from '../about/about';
class Home extends Component {
    render() {
        return (
            <div id='home-component'>
                <div className='bg-img'>
                    <Carousel fade interval='3000' slide={false} indicator={false}>
                        <Carousel.Item bsPrefix='topCarousel'>
                            <img className="d-block w-100 h-100" src={electr_car_1} alt="First slide" />
                            <Carousel.Caption>
                                <div className='carousel-text-div'>
                                    <Roll left>
                                        <h3 className='carousel-heading'>HAVE NO FEAR THE ELECTRICIAN IS HERE</h3>
                                    </Roll>
                                    <Slide left>
                                        <p className='carousel-paragraph'>Able to build window frames, doors, staircases, brattices, and frame buildings by using raw materials or pre-constructed items.</p>
                                    </Slide>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item bsPrefix='topCarousel'>
                            <img className="d-block w-100 h-100" src={paint_gal_3} alt="Second slide" />
                            <Carousel.Caption>
                                <div className='carousel-text-div'>
                                    <Roll left>
                                        <h3 className='carousel-heading'>Quality Work at the RIGHT Price for your colourfull Home.</h3>
                                    </Roll>
                                    <Slide left>
                                        <p className='carousel-paragraph'>Able to apply paint, stain, varnish, enamel etc. to property walls, ceilings, and furniture.</p>
                                    </Slide>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item bsPrefix='topCarousel'>
                            <img className="d-block w-100 h-100" src={carp_caro_1} alt="Third slide" />
                            <Carousel.Caption>
                                <div className='carousel-text-div'>
                                    <Roll left>
                                        <h3 className='carousel-heading'>DO You Need Help from Car Painters for your Furniture.</h3>
                                    </Roll>
                                    <Slide left>
                                        <p className='carousel-paragraph'>Able to build window frames, doors, staircases, brattices, and frame buildings by using raw materials or pre-constructed items.</p>
                                    </Slide>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item bsPrefix='topCarousel'>
                            <img className="d-block w-100 h-100" src={plum_car_1} alt="Fourth slide" />
                            <Carousel.Caption>
                                <div className='carousel-text-div'>
                                    <Roll left>
                                        <h3  className='carousel-heading'>Is There Any Plumbing Problem , OH DON't Worry. Plumber You Deserve</h3>
                                    </Roll>
                                    <Slide left>
                                        <p className='carousel-paragraph'>We have the expertise and the know-how to bring unique solutions to every Saintary Problem.</p>
                                    </Slide>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <MyNav />
                </div>
                {/* <HomeServiceCarousel /> */}<br /><br />
                <About />
                <HomeService />
                <WhyUs /><br />
                <Process />
                <OurMechanics /><br />
                <Footer />
            </div>
        );
    }
}
export default Home;