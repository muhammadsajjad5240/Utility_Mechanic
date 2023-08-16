import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyNav from '../../navbar/navbar';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import homeClean_car_1 from '../../../images/homeClean_car_1.jfif';
import homeClean_car_2 from '../../../images/homeClean_car_2.jfif';
import homeClean_car_3 from '../../../images/homeClean_car_3.jfif';
import homeClean_gal_1 from '../../../images/homeClean_gal_1.jfif';
import homeClean_gal_2 from '../../../images/homeClean_gal_2.jfif';
import homeClean_gal_3 from '../../../images/homeClean_gal_3.jfif';
import homeClean_gal_4 from '../../../images/homeClean_gal_4.jfif';
import homeClean_gal_5 from '../../../images/homeClean_gal_5.jfif';
import homeClean_gal_6 from '../../../images/homeClean_gal_6.jfif';
import homeCleaning from '../../../images/homeCleaning.jpg';
import Footer from '../../../components/footer/footer';
class HomeCleaning extends Component {
    render() {
        return (
            <div>
                <img src={homeCleaning} alt='Home Cleaning Image' className='service-back' />
                <MyNav /><br />
                <br />
                <Container>
                    <Row>
                        <Col xs={12} lg={6}>
                            <Carousel fade interval='1000' indicators={false}>
                                <Carousel.Item className='construction-carousel'>
                                    <img className="d-block w-100" src={homeClean_car_1} alt="First slide" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className='construction-carousel'>
                                    <img className="d-block w-100" src={homeClean_car_2} alt="Third slide" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className='construction-carousel'>
                                    <img className="d-block w-100" src={homeClean_car_3} alt="Third slide" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </Col>
                        <Col xs={12} lg={6}>
                            <h3 className='construction-heading'>Home Cleaning Detail!</h3><br />
                            <ul className='construction-detail'>
                                <li>We Offer Home,Office,Spring and builders clean at affordable and competitive Price.</li>
                                <li>We pride ourselves on offering the most up-to-date and efficient cooling system technologies.</li>
                            </ul><br />
                            <Link to="/SignIn">
                                <Button variant="primary" size="lg" className='servicebookbtn' >Book</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <br />
                <h4 className='construction-gal-head'>Our Home Cleaning Gallary.</h4>
                <hr className='style-eight' /><br />
                <Container className='cons-img-gallary'><br />
                    <Row>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={homeClean_gal_1} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={homeClean_gal_2} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={homeClean_gal_3} className='service-img-gallary' />
                        </Col>
                    </Row><br />
                    <Row className='cons-img-gallary'>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={homeClean_gal_4} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={homeClean_gal_5} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={homeClean_gal_6} className='service-img-gallary' />
                        </Col>
                    </Row><br />
                </Container><br />
                <Footer />
            </div>
        );
    }
}
export default HomeCleaning;