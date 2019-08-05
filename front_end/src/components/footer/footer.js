import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import logo from '../../images/logo.png';
import $ from 'jquery';
import './footer.css'
class Footer extends Component {
    render() {
        $(window).scroll(function () {
            var height = $(window).scrollTop();
            if (height > 100) {
                $('#back2Top').fadeIn();
            } else {
                $('#back2Top').fadeOut();
            }
        });
        $(document).ready(function () {
            $("#back2Top").click(function (event) {
                event.preventDefault();
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
        });
        return (
            <div className='footerStyle'>
                <div class="sbuttons">

                    <a href="#" target="_blank" class="sbutton whatsappIcon" tooltip="0300-9784804"><i class="fab fa-whatsapp"></i></a>

                    <a href="https://web.facebook.com/utilityMechanic/" target="_blank" class="sbutton fbIcon" tooltip="Facebook"><i class="fab fa-facebook-f"></i></a>

                    <a href="#" target="_blank" class="sbutton gplusIcon" tooltip="utilityMechanic@gmail.com"><i class="fab fa-google-plus-g"></i></a>

                    {/* <a href="#" target="_blank" class="sbutton twittIcon" tooltip="Twitter"><i class="@utilityMechanic"></i></a> */}

                    {/* <a href="#" target="_blank" class="sbutton pinteresIcon" tooltip="Pinterest"><i class="fab fa-pinterest-p"></i></a> */}

                    <a target="_blank" class="sbutton mainsbutton" tooltip="Share"><i class="fas fa-share-alt"></i></a>

                </div>
                <Row>
                    <Col xs={12} lg={3}>
                        <br /><br />
                        <img src={logo} alt='Footer Logo'  className='footerlogo' />
                    </Col>
                    <Col xs={12} lg={3}>
                        <h3 className='footerHeading'>Our Company</h3>
                        <ul>
                            <li className='footerLists' title='Order Booking'><Link to='/signIn' className='footer-link'>Booking Form</Link></li>
                            <li className='footerLists' title='Pricing'><Link to='#' className='footer-link'>Pricing</Link></li>
                            <li className='footerLists' title='Frequently Asked Questions'><Link to='/FAQs' className='footer-link'>FAQ</Link></li>
                            <li className='footerLists' title='Terms and Conditions'><Link to='/term-condition' className='footer-link'>Terms and Condition</Link></li>
                            <li className='footerLists' title='Contact Us'><Link to='/contact' className='footer-link'>Contact Us</Link></li>
                        </ul>
                    </Col>
                    <Col xs={12} lg={3}>
                        <h3 className='footerHeading'>Services</h3>
                        <ul>
                            <li className='footerLists' title='Electrical'><Link to='/electrician-service' className='footer-link'>Electrial</Link></li>
                            <li className='footerLists' title='Plumber'><Link to='/plumber-service' className='footer-link'>Plumber</Link></li>
                            <li className='footerLists' title='CarPanter'><Link to='/carpainter-service' className='footer-link'>Car Panter</Link></li>
                            <li className='footerLists' title='Painter'><Link to='/painter-service' className='footer-link'>Painter</Link></li>
                            <li className='footerLists' title='Construction'><Link to='/constructiofan-service' className='footer-link'>Construction</Link></li>
                        </ul>
                    </Col>
                    <Col xs={12} lg={3}>
                        <h3 className='footerHeading'>Contact Us</h3>
                        <ul>
                            <li className='footerLists'>
                                <i class="fas fa-phone contact-icon phone-icon"></i>0311-0749045
                        </li>
                            <li className='footerLists'>
                                <i class="fas fa-envelope text-danger contact-icon email-icon"></i>sajjadkhan42601@gmail.com
                            </li>
                            <li className='footerLists'><i class="fab fa-whatsapp contact-icon text-success"></i>0311-0749045</li>
                            {/* <li className='footerLists'><i class="fab fa-twitter text-white"></i> */}
                            {/* </li> */}
                            {/* <li className='footerLists'> */}
                            <i class="fas fa-angle-double-right" id='back2Top'></i>
                            {/* </li> */}
                        </ul>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Footer;