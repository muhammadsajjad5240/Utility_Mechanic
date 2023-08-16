import React, { Component } from 'react';
import Axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './contactus.css';
import MyNav from '../navbar/navbar';
import Footer from '../footer/footer';
import contactUsImage from '../../images/contactUsImage.jpg';
import contactSformStyle from '../../images/contactSformStyle.png';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleFeedBackChange = this.handleFeedBackChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    }
    handleNameChange = (event) => {
        document.getElementById('feedbackBtn').disabled = false;

        this.setState({ name: event.target.value });
        let namePattern = /^[a-zA-Z ]+$/;
        let name = document.getElementById('fullName').value;
        if (!namePattern.test(name)) {
            document.getElementById('fullName').style.border = '1px solid red';
        }
        else {
            document.getElementById('fullName').style.border = '1px solid black';

        }
    }

    handleEmailChange = (event) => {
        document.getElementById('feedbackBtn').disabled = false;

        this.setState({ email: event.target.value });
        let emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let email = document.getElementById('email').value;
        if (!emailPattern.test(email)) {
            document.getElementById('email').style.border = '1px solid red';
        }
        else {
            document.getElementById('email').style.border = '1px solid black';

        }
    }
    handlePhoneChange = (event) => {
        document.getElementById('feedbackBtn').disabled = false;
        this.setState({ phone: event.target.value });
        let phonePattern = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
        let phone = document.getElementById('phoneNo').value;
        if (!phonePattern.test(phone)) {
            document.getElementById('phoneNo').style.border = '1px solid red';
        }
        else {
            document.getElementById('phoneNo').style.border = '1px solid black';

        }
    }
    handleFeedBackChange = (event) => {
        document.getElementById('feedbackBtn').disabled = false;
        this.setState({ message: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        document.getElementById('feedbackBtn').disabled = true;

        let namePattern = /^[a-zA-Z ]+$/;
        let emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let phonePattern = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

        let name = document.getElementById('fullName').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phoneNo').value;
        let feedback = document.getElementById('message').value;
        if (!namePattern.test(name) || name.length < 4) {
            document.getElementById('fullName').style.border = '1px solid red';
        }
        else if (!phonePattern.test(phone)) {
            document.getElementById('phoneNo').style.border = '1px solid red';
        }
        else if (!emailPattern.test(email)) {
            document.getElementById('email').style.border = '1px solid red';
        }
        else if (feedback.length === 0) {
            document.getElementById('message').style.border = '2px solid red';
        }
        else {
            Axios.post("/api/putfeedBack", {
                Name: this.state.name,
                Email: this.state.email,
                phone: this.state.phone,
                feedBack: this.state.message,
            })

                .then(responce => {
                    let a = responce.statusText;
                    if (a === 'OK') {
                        alert("FeedBack Send Successfully");
                        this.setState({
                            name: '',
                            email: '',
                            phone: '',
                            message: ''
                        })
                        document.getElementById('feedbackBtn').disabled = false;
                    }
                })
                .catch(error => { alert(error) })
        }
    }
    myfocus = (a) => {
        document.getElementById(a).style.border = "1px solid black";
    }
    render() {
        return (
            <div id='contact-us-style'>
                <img src={contactUsImage} alt='Contact Us Header' className='contact-Nav-bg' />
                <MyNav />
                <div><br />
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} lg={{ span: 12, offset: 0 }}>
                                <h1>Contact Info!</h1>
                            </Col>
                        </Row>
                        <hr className='hrstyle' />
                    </Container>
                    <Container className='contact-style'>
                        <img src={contactSformStyle} alt='Contact Us Form Style' className='containerimg' />
                        <Row className='contactRow'><br /><br /><br /><br /><br /><br />
                            <Col xs={{ span: 10, offset: 1 }} lg={{ span: 4, offset: 1 }} className='contact-info'>
                                <br />
                                <ul id='contactUslist' >
                                    <li><i class="fas fa-map-marker-alt locationIcon contactUsListIcon" ></i><span >Abdullah Pur Faisalabad</span><br /></li>
                                    <li><i class="fas fa-phone phoneIcon contactUsListIcon"></i><span>041-8965432</span><br /></li>
                                    <li><i class="fab fa-whatsapp whatsappIcon contactUsListIcon" ></i><span>0300-000005</span><br /></li>
                                    <li><i class="fab fa-facebook-f facebookIcon contactUsListIcon"></i><span>acebook Address</span><br /></li>
                                    <li><i class="fas fa-envelope text-danger gmailIcon contactUsListIcon"></i><span>utility@gmail.com</span><br /></li>
                                </ul>
                                <br />
                            </Col>
                            <Col xs={12} lg={{ span: 6, offset: 0 }} className='form-col-style'><br />
                                <h4>Leave a Comment</h4>
                                <hr className='hrstyle' />
                                <Form>
                                    <Form.Row>
                                        <Col xs={{ span: 8, offset: 2 }} sm={{ span: 6, offset: 3 }} lg={{ span: 8, offset: 2 }}>
                                            <input type="text" placeholder="Enter Name" id='fullName' onFocus={() => this.myfocus('fullName')} value={this.state.name} onChange={this.handleNameChange} />
                                        </Col>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col xs={{ span: 8, offset: 2 }} sm={{ span: 6, offset: 3 }} lg={{ span: 8, offset: 2 }}>
                                            <input type="phone" placeholder="Enter Phone Number" id='phoneNo' onFocus={() => this.myfocus('phoneNo')} value={this.state.phone} onChange={this.handlePhoneChange} />
                                        </Col>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col xs={{ span: 8, offset: 2 }} sm={{ span: 6, offset: 3 }} lg={{ span: 8, offset: 2 }}>
                                            <input type="email" placeholder="Enter email" id='email' onFocus={() => this.myfocus('email')} value={this.state.email} onChange={this.handleEmailChange} />
                                        </Col>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col xs={{ span: 8, offset: 2 }} sm={{ span: 6, offset: 3 }} lg={{ span: 8, offset: 2 }}>
                                            <textarea type="text" placeholder="Message" id='message' onFocus={() => this.myfocus('message')} value={this.state.message} onChange={this.handleFeedBackChange} />
                                        </Col>
                                    </Form.Row><br />
                                    <Form.Row>
                                        <Col xs={{ span: 4, offset: 6 }} sm={{ span: 4, offset: 6 }} lg={{ span: 4, offset: 6 }}>
                                            <Button variant="primary" id='feedbackBtn' type="submit" onClick={this.handleSubmit}>Submit</Button><br /><br /><br /><br />
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </Col>
                            {/* <Row>
                                <Col lg={12}> */}
                            <iframe class='map-style' title='Utility Mechanic Head Office' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.821106325976!2d73.10479131448014!3d31.419054559282987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922681474da1a3b%3A0x9a245f11ee7b85a3!2sGovt+municipal+degree+college+Faisalabad!5e0!3m2!1sen!2s!4v1556213949329!5m2!1sen!2s" allowfullscreen></iframe>
                            {/* </Col>
                            </Row> */}
                            <br />
                        </Row>
                    </Container>
                </div><br /><br /><br /><br />
                <Footer />
            </div>
        );
    }
}
export default Contact;