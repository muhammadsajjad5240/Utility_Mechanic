import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './services.css';
import { Card, CardDeck, Container, Row, Col, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { Parallax, Background } from 'react-parallax';
import carPainterHeader from '../../images/carPainterHeader.jpg';
import construcitonHeader from '../../images/construcitonHeader.jpg';
import electricianHeaderImage from '../../images/electricianHeaderImage.jpg';
import homeCleaning from '../../images/homeCleaning.jpg';
import hvacheaders from '../../images/hvacheaders.png';
import painterheader from '../../images/painterheader.jpg';
import pumberHeader from '../../images/pumberHeader.jpg';
import Footer from '../footer/footer';
import serviceHeader from '../../images/serviceHeader.jfif';
import MyNav from '../navbar/navbar';
import handyMan from '../../images/handyman-min12.jpg';
import carService from '../../images/carService.png';
import events from '../../images/events.jpg';
class Services extends Component {
    render() {
        return (
            <div id='servicesComponent'>
                <MyNav />

                <img src={serviceHeader} alt='Service Header' className='service-nav-bankground' />
                {/* <h1 className='service-header-heading'>LOOKING TO HIRE A SERVICE PROVIDER</h1>
                    <p className='service-header-text'>SEARCH FOR THE REQUIRED SERVICE BELOW AND GET FREE QUOTES</p> */}
                <br /><br /><Container className='service-section'>
                    <h1 className='hiring-service-heading'>HIRING <b>SERVICE PROFESSIONAL</b> WAS NEVER
                     BEEN THIS EASY</h1>
                    <p className='hiring-service-para'>Ever wondered what it would be like to appoint
                     a professional service without making any effort? Well, look no further!
                     We make the efforts for you so that you can relax and enjoy our services.
                      Explore the utility Mehcanic 
                             services categories below that consists of <b>Electrical Services
, Home Cleaning Services, Painter Service, Plumber Services, HVac AC/Fridge Service, Civil And Construction,
                              </b> and pick a service according to your needs.
Or simply type your
requirement in the search bar and get a Professional Fixer right up to your doorstep at any location
within Dubai. From Life-Style changing services to Handyman services, utility Mehcanic  can do everything.
utility Mehcanic  provides services such as Car Repair, AC Installation, Deep Cleaning, Pest control,
Plumbing, Security System Installing, Health Trainer, Beautician, Movers and Packers,
Event Management, Photoshoot, Carpentry and so much more! So what are you waiting for?
                              Explore your options and let's get started!</p>
                </Container>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} lg={6} className='handyman-service'>
                        </Col>
                        <Col xs={12} sm={12} lg={6} className='service-info-col'>
                            <br /> <br /><br /> <br /><br /> <br /><br /> <br />
                            <h2 className='serviceHeading'>CarPanter SERVICES</h2>
                            <p className='serviceSubHeading'>THE BEST HANDYMAN PROFESSIONALS FOR ALL HOME Furniture or Any Wood Work.</p>
                            <br /><p className='serviceMainPara'>Most of us try to fix our own problems without calling for a professional
                             Handyman. Who's got the time and effort to call a Handyman and wait for their responses to see 
                             if they're available? Your problems can not wait and Utility Mechanic never delays. Utility Mechanic 
                             also provides Home and Office Maintenance Services such as Plumbing, Carpentry, Deep Cleaning,
                              AC Repair, Movers and Packers, Furniture Assembly to fix all your problems in no time!</p>
                            <br />
                            <Row>
                                <Col xs={{ span: 3, offset: 1 }}sm={{span:4, offset:4}} lg={{ span: 6, offset: 3 }}>
                                    <ButtonToolbar aria-label="Toolbar with button groups">
                                        <ButtonGroup className="mr-2 " aria-label="First group">
                                            <center><Link to='/signIn'><Button variant="primary" size="lg" type='submit' >Book Now</Button></Link>&nbsp;&nbsp;&nbsp;
                                            <Link to='/carpainter-service'><Button variant="primary" size="lg" type='submit' >Read More</Button></Link></center>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                    <Row>

                        <Col xs={12} sm={12} lg={6} className='service-info-col'>
                            <br /> <br /><br /> <br /><br /> <br /><br /> <br />
                            <h2 className='serviceHeading'>Construction Service</h2>
                            <p className='serviceSubHeading'>The Construction Service mechanic is responsible for managing the development and execution of new construction and Rebuld the development.</p>
                            <br /><p className='serviceMainPara'>Make all your problems go vroom, vroom! Utility Mechanic hires best peoples  providers that home building, Map planing services in efficient Way.</p>
                            <br />
                            <Row>
                                <Col xs={{ span: 3, offset: 1 }}sm={{span:4, offset:4}} lg={{ span: 6, offset: 3 }}>
                                    <ButtonToolbar aria-label="Toolbar with button groups">
                                        <ButtonGroup className="mr-2 " aria-label="First group">
                                            <center><Link to='/signIn'><Button variant="primary" size="lg" type='submit' >Book Now</Button></Link>&nbsp;&nbsp;&nbsp;
                                            <Link to='/constructiofan-service'><Button variant="primary" size="lg" type='submit' >Read More</Button></Link></center>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </Col>
                            </Row>

                        </Col>
                        <Col xs={12} sm={12} lg={6} className='CarService'>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} lg={6} className='eventService'>
                        </Col>
                        <Col xs={12} sm={12} lg={6} className='service-info-col'>
                            <br /> <br /><br /> <br /><br /> <br /><br /> <br />
                            <h2 className='serviceHeading'>Electrical Service</h2>
                            <p className='serviceSubHeading'>ONE-STOP FOR YOUR electricla home appliances such as lightining, wiring, water Motors etc.</p>
                            <br /><p className='serviceMainPara'>We all want to make sure that your electrical order complete efficiently . Our honor of platform remain in touch with customer for their satisfation.</p>
                            <br />
                            <Row>
                                <Col xs={{ span: 3, offset: 1 }}sm={{span:4, offset:4}} lg={{ span: 6, offset: 3 }}>
                                    <ButtonToolbar aria-label="Toolbar with button groups">
                                        <ButtonGroup className="mr-2 " aria-label="First group">
                                            <center><Link to='/signIn'><Button variant="primary" size="lg" type='submit' >Book Now</Button></Link>&nbsp;&nbsp;&nbsp;
                                            <Link to='/electrician-service'><Button variant="primary" size="lg" type='submit' >Read More</Button></Link></center>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                    <Row>

                        <Col xs={12} sm={12} lg={6} className='service-info-col'>
                            <br /> <br /><br /> <br /><br /> <br /><br /> <br />
                            <h2 className='serviceHeading'>Home Cleaning</h2>
                            <p className='serviceSubHeading'>We Offer Home,Office,Spring and builders clean at affordable and competitive Price.</p>
                            <br /><p className='serviceMainPara'> It covers areas which aren't traditionally covered by a regular or spring clean here some examples: Scale removal from all bathroom tiles, kitchen tiles, taps, shower heads etc..</p>
                            <br />
                            <Row>
                                <Col xs={{ span: 3, offset: 1 }}sm={{span:4, offset:4}} lg={{ span: 6, offset: 3 }}>
                                    <ButtonToolbar aria-label="Toolbar with button groups">
                                        <ButtonGroup className="mr-2 " aria-label="First group">
                                            <center><Link to='/signIn'><Button variant="primary" size="lg" type='submit' >Book Now</Button></Link>&nbsp;&nbsp;&nbsp;
                                            <Link to='/homecleaning-service'><Button variant="primary" size="lg" type='submit' >Read More</Button></Link></center>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </Col>
                            </Row>

                        </Col>
                        <Col xs={12} sm={12} lg={6} className='constructionService'>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} lg={6} className='homeCare'>
                        </Col>
                        <Col xs={12} sm={12} lg={6} className='service-info-col'>
                            <br /> <br /><br /> <br /><br /> <br /><br /> <br />
                            <h2 className='serviceHeading'>Hvac AC/Fridge Service</h2>
                            <p className='serviceSubHeading'>Providing Service in Fort Wayne for homes Heating, Ventilating, Air Conditioning and Controls with quality repairs & service</p>
                            <br /><p className='serviceMainPara'>If you are looking for a HVAC service agreement we can help you come up with an affordable and efficient plan for your business or institution.HVAC stands for Heating, Ventilating, and Air Conditioning, and HVAC systems are, effectively, everything from your air conditioner at home to the large systems used in industrial complexes and apartment blocks.</p>
                            <br />
                            <Row>
                                <Col xs={{ span: 3, offset: 1 }}sm={{span:4, offset:4}} lg={{ span: 6, offset: 3 }}>
                                    <ButtonToolbar aria-label="Toolbar with button groups">
                                        <ButtonGroup className="mr-2 " aria-label="First group">
                                            <center><Link to='/signIn'><Button variant="primary" size="lg" type='submit' >Book Now</Button></Link>&nbsp;&nbsp;&nbsp;
                                            <Link to='/hvac-Ac'><Button variant="primary" size="lg" type='submit' >Read More</Button></Link></center>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                    <Row>

                        <Col xs={12} sm={12} lg={6} className='service-info-col'>
                            <br /> <br /><br /> <br /><br /> <br /><br /> <br />
                            <h2 className='serviceHeading'>Painter SERVICE</h2>
                            <p className='serviceSubHeading'>If you're looking to transform your home, it's time to contact Utility Mechanics.</p>
                            <br /><p className='serviceMainPara'>Bright, muted, cheerful, elegant—whatever your mood, personality, or preference might be, there’s a paint color to match! Our local Five Star Painting teams specialize in making houses feel like homes through interior and exterior home painting services.
                            At Five Star Painting, we offer free price estimates, so there’s no reason to hesitate! Our house painting contractors know what they’re doing, and they do it well!</p>
                            <br />
                            <Row>
                                <Col xs={{ span: 3, offset: 1 }}sm={{span:4, offset:4}} lg={{ span: 6, offset: 3 }}>
                                    <ButtonToolbar aria-label="Toolbar with button groups">
                                        <ButtonGroup className="mr-2 " aria-label="First group">
                                            <center><Link to='/signIn'><Button variant="primary" size="lg" type='submit' >Book Now</Button></Link>&nbsp;&nbsp;&nbsp;
                                            <Link to='/painter-service'><Button variant="primary" size="lg" type='submit' >Read More</Button></Link></center>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </Col>
                            </Row>

                        </Col>
                        <Col xs={12} sm={12} lg={6}>
                            <div className='personalService'>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} lg={6} className='businessService'>
                        </Col>
                        <Col xs={12} sm={12} lg={6} className='service-info-col'>
                            <br /> <br /><br /> <br /><br /> <br /><br /> <br />
                            <h2 className='serviceHeading'>Plumber SERVICES</h2>
                            <p className='serviceSubHeading'>At Horizon Services, we offer a full range of plumbing services to address any issue you may be facing. Whether you're currently dealing with a severely clogged drain, you suspect your water heater may be malfunctioning.</p>
                            <br /><p className='serviceMainPara'>Every plumbing job is important to us and we will respond promptly to any callout, big or small. Whether your bathroom is flooded or you just need a toilet unblocked, you can rely on your local Laser Plumbing member company to provide a "Totally Dependable" service.We aim to minimise your stress by providing a plumber who shows up on time, is well presented, professional and carries out your job with care and skill.</p>
                            <br />
                            <Row>
                                <Col xs={{ span: 3, offset: 1 }}sm={{span:4, offset:4}} lg={{ span: 6, offset: 3 }}>
                                    <ButtonToolbar aria-label="Toolbar with button groups">
                                        <ButtonGroup className="mr-2 " aria-label="First group">
                                            <Link to='/signIn'><Button variant="primary" size="lg" type='submit' >Book Now</Button></Link>&nbsp;&nbsp;&nbsp;
                                            <Link to='/plumber-service'><Button variant="primary" size="lg" type='submit' >Read More</Button></Link>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container><br />
                <Footer />
            </div>
        );
    }
}
export default Services;