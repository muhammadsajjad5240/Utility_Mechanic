import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import electr_car_1 from '../../../images/electr_car_1.jpg';
import electr_car_2 from '../../../images/electr_car_2.jpg';
import electr_car_3 from '../../../images/electr_car_3.jpg';
import MyNav from '../../navbar/navbar';
import electr_gal_1 from '../../../images/electr_gal_1.jpg';
import electr_gal_2 from '../../../images/electr_gal_2.jpg';
import electr_gal_3 from '../../../images/electr_gal_3.jpg';
import electr_gal_4 from '../../../images/electr_gal_4.jpg';
import electr_gal_5 from '../../../images/electr_gal_5.jpg';
import electr_gal_6 from '../../../images/electr_gal_6.jpg';
import electricianHeaderImage from '../../../images/electricianHeaderImage.jpg';
import Footer from '../../../components/footer/footer';
class Electrician extends Component {
    render() {
        return (
            <div>
                <img src={electricianHeaderImage} alt='Electrician Image' className='service-back' />
                <MyNav /><br /><br />
                <Container>
                    <Row>
                        <Col xs={12} lg={6}>
                            <Carousel fade interval='1000' indicators={false}>
                                <Carousel.Item className='construction-carousel'>
                                    <img className="d-block w-100" src={electr_car_3} alt="First slide" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className='construction-carousel'>
                                    <img className="d-block w-100" src={electr_car_2} alt="Third slide" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className='construction-carousel'>
                                    <img className="d-block w-100" src={electr_car_1} alt="Third slide" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </Col>
                        <Col xs={12} lg={6}>
                            <h3 className='construction-heading'>Electrical Detail!</h3><br />
                            <ul className='construction-detail'>
                                <li>Able to build window frames, doors, staircases, brattices, and frame buildings by using raw materials or pre-constructed items.</li>
                                <li>Install ground leads and connect power cables to equipment, such as motors.</li>
                            </ul>
                            <Link to="/SignIn">

                                <Button variant="primary" size="lg" className='servicebookbtn'  >Book</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <br />
                <h4 className='construction-gal-head'>Our Eletrical Gallary.</h4>
                <hr className='style-eight' /><br />
                <Container className='cons-img-gallary'><br />
                    <Row>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={electr_gal_1} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={electr_gal_2} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={electr_gal_3} className='service-img-gallary' />
                        </Col>
                    </Row><br />
                    <Row className='cons-img-gallary'>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={electr_gal_4} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={electr_gal_5} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={electr_gal_6} className='service-img-gallary' />
                        </Col>
                    </Row><br />
                </Container><br />
                <Footer />
            </div>
        );
    }
}
export default Electrician;