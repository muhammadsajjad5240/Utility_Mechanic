// Below we import some required file
import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import './process.css';
// Below we create main class Process
class Process extends Component {
    render() {
        return (
            <div id='process'>
                {/* Below is process heading Row */}
                <Row>
                    <Col>
                        <h2 className='processHeading'>The Process</h2>
                    </Col>
                </Row>
                {/* Below is process row where differnt icon will show in icon div */}
                {/* processDiv is div in which icons will display */}
                <Row className='processRow'>
                    <Col xs={3}>
                        <div className='processDiv'>
                            <center><i class="fa fa-eye fa-5x processicon"></i></center>
                        </div>
                        <p className='processText'>Visit</p>
                    </Col>
                    <Col xs={3}>
                        <div className='processDiv'>
                            <center><i class="far fa-edit processicon"></i></center>
                        </div>
                        <p className='processText'>Request</p>
                    </Col>
                    <Col xs={3}>
                        <div className='processDiv'>
                            <center><i class="material-icons processicon">directions_run</i></center>
                        </div>
                        <p className='processText' id='mechanicArival'>Mechanic Arrival</p>
                    </Col>
                    <Col xs={3}>
                        <div className='processDiv'>
                            <center><i class="fas fa-diagnoses processicon"></i></center>
                        </div>
                        <p className='processText'>Diagnose</p>
                    </Col>
                    <Col xs={3}>
                        <div className='processDiv'>
                            <center><i class="material-icons" id='quoteIcon'>format_quote</i></center>
                        </div>
                        <p className='processText'>Quote</p>
                    </Col>
                    <Col xs={3}>
                        <div className='processDiv'>
                            <center><i class="fas fa-tools processicon"></i></center>
                        </div>
                        <p className='processText'>Repair</p>
                    </Col>
                    <Col xs={3}>
                        <div className='processDiv'>
                            <center><i class="fas fa-check processicon"></i></center>
                        </div>
                        <p className='processText'>Done</p>
                    </Col>
                    <Col xs={3}>
                        <div className='processDiv'>
                            <center><i class="fa fa fa-comments processicon"></i></center>
                        </div>
                        <p className='processText'>FeedBack</p>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Process;