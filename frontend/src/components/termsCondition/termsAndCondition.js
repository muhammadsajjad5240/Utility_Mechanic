import React,{Component} from 'react';
import './termsAndCondition.css';
import {Row, Col} from 'react-bootstrap';
class TermCondition extends Component{
    render(){
        return(
            <div>
                <Row className='termsHeader'>
                    <Col xs={12} lg={12}>
                    <h2>Terms And Condition of Utility Mechanic (PVT).</h2>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default TermCondition;