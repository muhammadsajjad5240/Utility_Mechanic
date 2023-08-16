import React, { Component } from 'react';
import './homeService.css';
import { Card, CardDeck, Row, Col, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { Parallax } from "react-parallax";
import { Link } from 'react-router-dom';
import ACRepair from '../../../images/AcService.jpg';
import carp_caro_1 from '../../../images/carp_caro_1.jpg';
import CarRepair from '../../../images/CarRepair.png';
import cons_gal_4 from '../../../images/cons_gal_4.jfif';
import electr_car_2 from '../../../images/electr_car_2.jpg';
import homeClean_gal_5 from '../../../images/homeClean_gal_5.jfif';
import paint_gal_5 from '../../../images/paint_gal_5.jpg';
import plum_car_1 from '../../../images/plum_car_1.jpg';
const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};
class HomeService extends Component {
    render() {
        return (
            <div id='homeService' >
                <Parallax  strength={500}>
                <div className='homeServiceContainer'><br />
                    <h1>Our Services</h1>
                <hr className='style-eight' />
                    
                    <Row>
                        <CardDeck>
                            <Card>
                                <Card.Img src={ACRepair} />
                                <Card.ImgOverlay>
                                    <Card.Text>
                                        <h3>AC Repair</h3>
                                            
                                        <Link to='/hvac-Ac'><Button>Explore</Button></Link>
                                            
                                        </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            <Card>
                                <Card.Img src={carp_caro_1} />
                                <Card.ImgOverlay>
                                    <Card.Text>
                                        <h3>CarPainter</h3>
                                        
                                        
                                                <Link to='/carpainter-service'><Button>Explore</Button></Link>
                                        </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            <Card>
                                <Card.Img src={CarRepair} />
                                <Card.ImgOverlay>
                                    <Card.Text>
                                        <h3>Car Repair</h3>
                                        
                                                <Link to=''><Button>Explore</Button></Link>
                                        </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            <Card>
                                <Card.Img src={cons_gal_4} />
                                <Card.ImgOverlay>
                                    <Card.Text>
                                        <h3>Construction</h3>
                                        
                                                <Link to='/constructiofan-service'><Button>Explore</Button></Link>
                                        </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </CardDeck>
                    </Row>
                    <Row>
                        <CardDeck>
                            <Card>
                                <Card.Img src={electr_car_2} />
                                <Card.ImgOverlay>
                                    <Card.Text>
                                        <h3>Electrician</h3>
                                        
                                                <Link to='/electrician-service'><Button>Explore</Button></Link>
                                        
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            <Card>
                                <Card.Img src={homeClean_gal_5} />
                                <Card.ImgOverlay>
                                    <Card.Text>
                                        <h3>Home Cleaning</h3>
                                        
                                                <Link to='/homecleaning-service'><Button>Explore</Button></Link>
                                        </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            <Card>
                                <Card.Img src={paint_gal_5} />
                                <Card.ImgOverlay>
                                    <Card.Text>
                                        <h3>Painter</h3>
                                        
                                                <Link to='/painter-service'><Button>Explore</Button></Link>
                                        </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            <Card>
                                <Card.Img src={plum_car_1} />
                                <Card.ImgOverlay>
                                    <Card.Text>
                                        <h3>Plumber</h3>
                                        
                                                <Link to='/plumber-service'><Button>Explore</Button></Link>
                                        </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </CardDeck>
                    </Row>
                    <Row>
                        <Col>
                            <center><Link to="/services"><h6>Explore More</h6></Link></center><br /><br />
                        </Col>
                    </Row>
                </div>
                </Parallax>
            </div>
        );
    }
}
export default HomeService;