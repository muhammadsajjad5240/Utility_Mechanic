import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import './homeServiceCarousel.css';
import carp_caro_1 from '../../../images/carp_caro_1.jpg';
import Acinstallation from '../../../images/Acinstallation.png';
import electr_car_1 from '../../../images/electr_car_1.jpg'
import cons_gal_4 from '../../../images/cons_gal_4.jfif';
import paint_gal_5 from '../../../images/paint_gal_5.jpg';
import plum_car_1 from '../../../images/plum_car_1.jpg';
import homeClean_gal_5 from '../../../images/homeClean_gal_5.jfif';
class HomeServiceCarousel extends Component {
    render() {
        return (
            <div id='homeCarousel'><br /><br />
                <Row>
                    <Col>
                        <h2 className='provideHeading'>Are Your Looking for a Friendly, Reliable Service?</h2>
                    </Col>
                </Row><br /><br />
                <Row>
                    <Col xs={12} lg={{ span: 10, offset: 1 }}>
                        <Carousel className='mycarousel'fade indicators={false} interval={1000}>
                            <Carousel.Item>
                                <Row>
                                    <Col>
                                        <img className="d-block w-100" src={carp_caro_1} alt="First slide" className='carouselImage' />
                                    </Col>
                                    <Col>
                                        <h3 className='provideServiceHeading'>DO You Need Help from Car Painters for your Furniture.</h3>
                                        <h4 className='subServiceHeading'>Install Structure Such as Windows</h4>
                                        <p>Able to build window frames, doors, staircases, brattices, and frame buildings by using raw materials or pre-constructed items.</p>
                                        <h4 className='subServiceHeading'>Bluid Rough Floor with Wood</h4>
                                        <p>Skills needed to lay out flooring, roofing, and drywall, ensuring they are level, plumb, and installed with as little waste possible.</p>
                                        <Button className='readMoreBtn'>Read More</Button>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row>
                                    <Col>
                                        <img className="d-block w-100" src={Acinstallation} alt="First slide" className='carouselImage' />
                                    </Col>
                                    <Col>
                                        <h3 className='provideServiceHeading'>Summer is comming Get Your AC Repaired</h3>
                                        <h4 className='subServiceHeading'>Cleaning or replacing the air filter</h4>
                                        <p>Doing this keeps dust and other allergens from spreading around your home.</p>
                                        <h4 className='subServiceHeading'>Cleaning and inspecting the blower motor</h4>
                                        <p>The blower disperses the chilled air over the evaporator in the A/C unit. A dirty blower motor can cause the motor to overheat.</p>
                                        <br /><br /><Button className='readMoreBtn'>Read More</Button>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row>
                                    <Col>
                                        <img className="d-block w-100" src={electr_car_1} alt="First slide" className='carouselImage' />
                                    </Col>
                                    <Col>
                                        <h3 className='provideServiceHeading'>HAVE NO FEAR THE ELECTRICIAN IS HERE</h3>
                                        <h4 className='subServiceHeading'>Test electrical systems in electrical wiring</h4>
                                        <p>Able to build window frames, doors, staircases, brattices, and frame buildings by using raw materials or pre-constructed items.</p>
                                        <h4 className='subServiceHeading'>Do You Want Ground Lead and power cables.</h4>
                                        <p>Install ground leads and connect power cables to equipment, such as motors.Use a variety of tools and equipment such as power construction equipment</p>
                                        <br /><Button className='readMoreBtn'>Read More</Button>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row>
                                    <Col>
                                        <img className="d-block w-100" src={cons_gal_4} alt="First slide" className='carouselImage' />
                                    </Col>
                                    <Col>
                                        <h3 className='provideServiceHeading'>Do You want build perfect house with adventure design. </h3>
                                        <h4 className='subServiceHeading'>Fix Budget Perfect Construction</h4>
                                        <p> construction project manager duty is to manage the financial plan and consistently evaluate the project budget. </p>
                                        <h4 className='subServiceHeading'>Less Time Fullfill DREAMS</h4>
                                        <p>We must develop, maintain, evaluate, and readjust a schedule as necessary to ensure timely delivery of the final project.</p>
                                        <Button className='readMoreBtn'>Read More</Button>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row>
                                    <Col>
                                        <img className="d-block w-100" src={paint_gal_5} alt="First slide" className='carouselImage' />
                                    </Col>
                                    <Col>
                                        <h3 className='provideServiceHeading'>Quality Work at the RIGHT Price for your colourfull Home.</h3>
                                        <h4 className='subServiceHeading'>A New Roof Ceiling in New Theme.</h4>
                                        <p>Able to apply paint, stain, varnish, enamel etc. to property walls, ceilings, and furniture.</p>
                                        <h4 className='subServiceHeading'>Good Cooperative Workers for Best Servie.</h4>
                                        <p>Coordinate with the Home master in order to modify colours of paint, stain, or varnish.</p>
                                        <Button className='readMoreBtn'>Read More</Button>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row>
                                    <Col>
                                        <img className="d-block w-100" src={plum_car_1} alt="First slide" className='carouselImage' />
                                    </Col>
                                    <Col>
                                        <h3 className='provideServiceHeading'>Is There Any Plumbing Problem , OH DOON't Worry. Plumber You Deserve</h3>
                                        <h4 className='subServiceHeading'>Pipe Maintenance For Continue Cooling.</h4>
                                        <p>We pride ourselves on offering the most up-to-date and efficient cooling system technologies.</p>
                                        <h4 className='subServiceHeading'>Sanitary System Installation</h4>
                                        <p>We have the expertise and the know-how to bring unique solutions to every Saintary Problem.</p>
                                        <Button className='readMoreBtn'>Read More</Button>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row>
                                    <Col>
                                        <img className="d-block w-100" src={homeClean_gal_5} alt="First slide" className='carouselImage' />
                                    </Col>
                                    <Col>
                                        <h3 className='provideServiceHeading'>We Offer Home,Office,Spring and builders clean at affordable and competitive Price.</h3>
                                        <h4 className='subServiceHeading'>Pipe Maintenance For Continue Cooling.</h4>
                                        <p>We pride ourselves on offering the most up-to-date and efficient cooling system technologies.</p>
                                        <h4 className='subServiceHeading'>Sanitary System Installation</h4>
                                        <p>We have the expertise and the know-how to bring unique solutions to every Saintary Problem.</p>
                                        <Button className='readMoreBtn'>Read More</Button>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default HomeServiceCarousel;