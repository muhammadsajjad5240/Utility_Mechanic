import React, { Component } from 'react';
import './construction.css'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import MyNav from '../../navbar/navbar';
import cons_1 from '../../../images/cons_1.jpg';
import cons_2 from '../../../images/cons_2.jfif';
import cons_3 from '../../../images/cons_3.jfif';
import cons_gal_1 from '../../../images/cons_gal_1.jfif';
import cons_gal_2 from '../../../images/cons_gal_2.jfif';
import cons_gal_3 from '../../../images/cons_gal_3.jfif';
import cons_gal_4 from '../../../images/cons_gal_4.jfif';
import cons_gal_5 from '../../../images/cons_gal_5.jfif';
import cons_gal_6 from '../../../images/cons_gal_6.jfif';
import construcitonHeader from '../../../images/construcitonHeader.jpg';
import Footer from '../../../components/footer/footer';
class Construction extends Component {
    render() {
        return (
            <div>
                    <img src={construcitonHeader} alt='Contruction Image' className='service-back' />
                    <MyNav /><br /><br />
                <Container>
                    <Row>
                        <Col xs={12} lg={6}>
                            <Carousel fade interval='1000' indicators={false}>
                                <Carousel.Item className='construction-carousel'>
                                    <img className="d-block w-100" src={cons_1} alt="First slide" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className='construction-carousel'>
                                    <img className="d-block w-100" src={cons_2} alt="Third slide" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className='construction-carousel'>
                                    <img className="d-block w-100" src={cons_3} alt="Third slide" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </Col>
                        <Col xs={12} lg={6}><br /><br /><br />
                            <h3 className='construction-heading'>Construction Detail!</h3><br />
                            <ul className='construction-detail'>
                                <li>Do You want build perfect house with adventure design. </li>
                                <li>We must develop, maintain, evaluate, and readjust a schedule as necessary to ensure timely delivery of the final project.</li>
                            </ul><br />
                            <Link to="/SignIn">

                                <Button variant="primary" size="lg" className='servicebookbtn' >Book</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <br />
                <h4 className='construction-gal-head'>Our Construction Gallary.</h4>
                <hr className='style-eight' /><br />
                <Container className='cons-img-gallary'><br />
                    <Row>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={cons_gal_1} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={cons_gal_2} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={cons_gal_3} className='service-img-gallary' />
                        </Col>
                    </Row><br />
                    <Row className='cons-img-gallary'>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={cons_gal_4} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={cons_gal_5} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={cons_gal_6} className='service-img-gallary' />
                        </Col>
                    </Row><br />
                </Container><br />
                <Footer />
            </div>
        );
    }
}
export default Construction;