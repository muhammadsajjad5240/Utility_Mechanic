import React,{Component} from 'react'
import {Row, Col} from 'react-bootstrap';
import './whyUs.css';
import easy from '../../../images/easy.png';
import transparent from '../../../images/transparent.png';
import money from '../../../images/money.png';
class WhyUs extends Component{
    render(){
        return(
            <div id='whyUs'>
                <div className='whyUs'><br /><br /><br /><br />
                    <h1>Why Us?</h1><br />
                    <Row className='whyusRow'>
                        <Col xs={12} sm={12} lg={{ span: 4 }}>
                            <center><img src={easy} /></center><br />
                            <h5>We make it easy</h5><br /><br />
                            <ul>
                                <li><i class="fas fa-greater-than"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24 x 7 breakdown assistance</li>
                                <li><i class="fas fa-greater-than"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Doorstep services</li>
                                <li><i class="fas fa-greater-than"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pick-Up and Drop-of facility</li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={12}  lg={{ span: 4 }}>
                            <center> <img src={transparent} /></center><br />
                            <h5>Transparent & Fair</h5><br /><br />
                            <ul>
                                <li><i class="fas fa-greater-than"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transparent Pricing</li>
                                <li><i class="fas fa-greater-than"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Live Updates</li>
                                <li><i class="fas fa-greater-than"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Genuine Parts</li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={12}  lg={{ span: 4 }}>
                            <center><img src={money} /></center><br />
                            <h5>Value for Money</h5><br /><br />
                            <ul>
                                <li><i class="fas fa-greater-than"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lowest and instant quote</li>
                                <li><i class="fas fa-greater-than"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Expert Mechanics</li>
                                <li><i class="fas fa-greater-than"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Service Warranty</li>
                            </ul>
                        </Col>
                    </Row>
                    <br /><br /><br />
                </div>
            </div>
        );
    }
}
export default WhyUs;