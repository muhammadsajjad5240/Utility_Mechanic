import React, { Component } from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import MyNav from '../../navbar/navbar';
import { Link } from 'react-router-dom';
import carp_caro_1 from '../../../images/carp_caro_1.jpg';
import carp_caro_2 from '../../../images/carp_caro_2.jpg';
import carp_caro_3 from '../../../images/carp_caro_3.jpg';
import carp_gal_1 from '../../../images/carp_gal_1.jfif';
import carp_gal_2 from '../../../images/carp_gal_2.jfif';
import carp_gal_3 from '../../../images/carp_gal_3.jfif';
import carp_gal_4 from '../../../images/carp_gal_4.jfif';
import carp_gal_5 from '../../../images/carp_gal_5.jfif';
import carp_gal_6 from '../../../images/carp_gal_6.jfif';
import carPainterHeader from '../../../images/carPainterHeader.jpg';
import Footer from '../../../components/footer/footer';
class CarPainter extends Component {
    render() {
        return (
            <div>
                <img src={carPainterHeader} alt='CarPanter Image' className='service-back' />

                <MyNav /><br /><br />
                <Container>
                    <Row>
                        <Col xs={12} lg={6}>
                            <Carousel fade interval='1000' indicators={false}>
                                <Carousel.Item className='construction-carousel'>
                                    <img className="d-block w-100" src={carp_caro_1} alt="First slide" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className='construction-carousel'>
                                    <img className="d-block w-100" src={carp_caro_2} alt="Third slide" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className='construction-carousel'>
                                    <img className="d-block w-100" src={carp_caro_3} alt="Third slide" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </Col>
                        <Col xs={12} lg={6}>
                            <h3 className='construction-heading'>CarPainter Detail!</h3><br />
                            <ul className='construction-detail'>
                                <li>We are providing the Car Panter services with our expert labor</li>
                                <li>Install Structure Such as Windows.</li>
                                <li>Able to build window frames, doors, staircases, brattices, and frame buildings by using raw materials or pre-constructed items.</li>
                                {/* <li>Skills needed to lay out flooring, roofing, and drywall, ensuring they are level, plumb, and installed with as little waste possible.</li> */}
                            </ul><br />
                            <Link to="/SignIn">
                                <Button variant="primary" size="lg" className='servicebookbtn' >Book</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <br />
                <h4 className='construction-gal-head'>Our CarPainter Gallary.</h4>
                <hr className='style-eight' /><br />
                <Container className='cons-img-gallary'><br />
                    <Row>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={carp_gal_1} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={carp_gal_2} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={carp_gal_3} className='service-img-gallary' />
                        </Col>
                    </Row><br />
                    <Row className='cons-img-gallary'>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={carp_gal_4} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={carp_gal_5} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={carp_gal_6} className='service-img-gallary' />
                        </Col>
                    </Row><br />
                </Container><br />
                <Footer />
            </div>
        );
    }
}
export default CarPainter;