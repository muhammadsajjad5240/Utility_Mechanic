import React, { Component } from 'react';
import MyNav from '../../navbar/navbar';
import { Carousel, Row, Col, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Hvac_car_1 from '../../../images/Hvac_car_1.jpg';
import Hvac_car_2 from '../../../images/Hvac_car_2.jpg';
import Hvac_car_3 from '../../../images/Hvac_car_3.jpg';
import Hvac_gal_1 from '../../../images/Hvac_gal_1.jpg';
import Hvac_gal_2 from '../../../images/Hvac_gal_2.jpg';
import Hvac_gal_3 from '../../../images/Hvac_gal_3.jpg';
import Hvac_gal_4 from '../../../images/Hvac_gal_4.jpg';
import Hvac_gal_5 from '../../../images/Hvac_gal_5.jpg';
import Hvac_gal_6 from '../../../images/Hvac_gal_6.jpg';
import hvacheaders from '../../../images/hvacheaders.png';
import Footer from '../../../components/footer/footer';
class HVacTechnician extends Component {
    render() {
        return (
            <div>
                <img src={hvacheaders} alt='HVac Ac Fridge Service' className='service-back' />
                <MyNav /><br /><br />
                <Container>
                    <Row>
                        <Col xs={12} lg={6}>
                            <Carousel fade interval='1000' indicators={false}>
                                <Carousel.Item className='construction-carousel'>
                                    <img className="d-block w-100" src={Hvac_car_1} alt="First slide" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className='construction-carousel'>
                                    <img className="d-block w-100" src={Hvac_car_2} alt="Third slide" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className='construction-carousel'>
                                    <img className="d-block w-100" src={Hvac_car_3} alt="Third slide" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </Col>
                        <Col xs={12} lg={6}>
                            <h3 className='construction-heading'>Electrical Detail!</h3><br />
                            <ul className='construction-detail'>
                                <li>Doing this keeps dust and other allergens from spreading around your home.</li>
                                <li>The blower disperses the chilled air over the evaporator in the A/C unit. A dirty blower motor can cause the motor to overheat.</li>
                            </ul><br />
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
                            <img src={Hvac_gal_1} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={Hvac_gal_2} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={Hvac_gal_3} className='service-img-gallary' />
                        </Col>
                    </Row><br />
                    <Row className='cons-img-gallary'>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={Hvac_gal_4} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={Hvac_gal_5} className='service-img-gallary' />
                        </Col>
                        <Col xs={12} sm={4} lg={{ span: 4, offset: 0 }}>
                            <img src={Hvac_gal_6} className='service-img-gallary' />
                        </Col>
                    </Row><br />
                </Container><br />
                <Footer />
            </div>
        );
    }
}
export default HVacTechnician;