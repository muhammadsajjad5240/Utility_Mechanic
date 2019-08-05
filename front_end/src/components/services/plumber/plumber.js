import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import plum_car_1 from '../../../images/plum_car_1.jpg';
import plum_car_2 from '../../../images/plum_car_2.jpg';
import MyNav from '../../navbar/navbar';
import plum_car_3 from '../../../images/plum_car_3.jpg';
import plum_gal_1 from '../../../images/plum_gal_1.jpg';
import plum_gal_2 from '../../../images/plum_gal_2.jpg';
import plum_gal_3 from '../../../images/plum_gal_3.jpg';
import plum_gal_4 from '../../../images/plum_gal_4.jpg';
import plum_gal_5 from '../../../images/plum_gal_5.jpg';
import plum_gal_6 from '../../../images/plum_gal_6.jpg';
import pumberHeader from '../../../images/pumberHeader.jpg';
import Footer from '../../../components/footer/footer';
class Plumber extends Component {
    render() {
        return (
            <div>
                <img src={pumberHeader} alt='Plumber Image' className='service-back' />
                <MyNav /><br /><br />
                <br />
                <Container>
                    <Row>
                        <Col xs={12} lg={6}>
                            <Carousel fade interval='1000' indicators={false}>
                                <Carousel.Item className='construction-carousel'>
                                    <img className="d-block w-100" src={plum_car_1} alt="First slide" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className='construction-carousel'>
                                    <img className="d-block w-100" src={plum_car_2} alt="Third slide" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className='construction-carousel'>
                                    <img className="d-block w-100" src={plum_car_3} alt="Third slide" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </Col>
                        <Col xs={12} lg={6}>
                            <h3 className='construction-heading'>Plumber Detail!</h3><br />
                            <ul className='construction-detail'>
                                <li>We pride ourselves on offering the most up-to-date and efficient cooling system technologies.</li>
                                <li>We have the expertise and the know-how to bring unique solutions to every Saintary Problem.</li>
                            </ul><br />
                            <Link to="/SignIn">
                                <Button variant="primary" size="lg" className='servicebookbtn' >Book</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <br />
                <h4 className='construction-gal-head'>Our Plumber Gallary.</h4>
                <hr className='style-eight' /><br />
                <Container className='cons-img-gallary'><br />
                    <Row>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={plum_gal_1} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={plum_gal_2} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={plum_gal_3} className='service-img-gallary' />
                        </Col>
                    </Row><br />
                    <Row className='cons-img-gallary'>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={plum_gal_4} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={plum_gal_5} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={plum_gal_6} className='service-img-gallary' />
                        </Col>
                    </Row><br />
                </Container><br />
                <Footer />
            </div>
        );
    }
}
export default Plumber;