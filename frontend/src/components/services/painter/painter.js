import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import paint_car_1 from '../../../images/paint_car_1.jpg';
import MyNav from '../../navbar/navbar';
import paint_car_2 from '../../../images/paint_car_2.jpg';
import paint_car_3 from '../../../images/paint_car_3.jpg';
import paint_gal_1 from '../../../images/paint_gal_1.jpg';
import paint_gal_2 from '../../../images/paint_gal_2.jpg';
import paint_gal_3 from '../../../images/paint_gal_3.jpg';
import paint_gal_4 from '../../../images/paint_gal_4.jpg';
import paint_gal_5 from '../../../images/paint_gal_5.jpg';
import paint_gal_6 from '../../../images/paint_gal_6.jpg';
import painterheader from '../../../images/painterheader.jpg';
import Footer from '../../../components/footer/footer';
class Painter extends Component {
    render() {
        return (
            <div>
            <img src={painterheader} alt='Painter Image' className='service-back' />
                    <MyNav /><br /><br />
                <Container>
                    <Row>
                        <Col xs={12} lg={6}>
                            <Carousel fade interval='1000' indicators={false}>
                                <Carousel.Item className='construction-carousel'>
                                    <img className="d-block w-100" src={paint_car_1} alt="First slide" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className='construction-carousel'>
                                    <img className="d-block w-100" src={paint_car_2} alt="Third slide" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className='construction-carousel'>
                                    <img className="d-block w-100" src={paint_car_3} alt="Third slide" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </Col>
                        <Col xs={12} lg={6}>
                            <h3 className='construction-heading'>Home Painter  Detail!</h3><br />
                            <ul className='construction-detail'>
                                <li>Quality Work at the RIGHT Price for your colourfull Home.</li>
                                <li>Coordinate with the Home master in order to modify colours of paint, stain, or varnish.</li>
                            </ul><br />
                            <Link to="/SignIn">
                                <Button variant="primary" size="lg" className='servicebookbtn' >Book</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <br />
                <h4 className='construction-gal-head'>Our Painter Gallary.</h4>
                <hr className='style-eight' /><br />
                <Container className='cons-img-gallary'><br />
                    <Row>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={paint_gal_1} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={paint_gal_2} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={paint_gal_3} className='service-img-gallary' />
                        </Col>
                    </Row><br />
                    <Row className='cons-img-gallary'>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={paint_gal_4} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={paint_gal_5} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={paint_gal_6} className='service-img-gallary' />
                        </Col>
                    </Row><br />
                </Container><br />
                <Footer />
            </div>
        );
    }
}
export default Painter;