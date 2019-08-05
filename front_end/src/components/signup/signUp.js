// Below we import required files 
import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import logo from '../../images/logo.png';
import { Form, Row, Col } from 'react-bootstrap';
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../home/home';
import MyNav from '../navbar/navbar';
import './signup.css';
import Axios from 'axios';
import Footer from '../footer/footer';
import './signup.css';
let obj = null;
// Below we declare the main class for this component
class SignUp extends Component {
    // Below inside the constructor we bind the function
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handlesubmit = this.myfocus.bind(this);
        // Below we declare the state to store values
        this.state = {
            name: '',
            email: '',
            username: '',
            password: '',
            phone: '',
            address: '',
            status: '',
            description: '',
            selectedFile: '',
            service: '',
            show: true,
            data: [],
            id: 0
        };
    }
    // below is handleclose function which will call when Modal close
    handleClose() {
        this.setState({ show: false });
    }
    // below is handleclose function which will call when Modal open
    handleShow() {
        this.setState({ show: true });
    }
    // Below is function when any change made in Name input field onChange Validation also create.
    handleNameChange = (event) => {
        document.getElementById('signUpclose').disabled = false;
        document.getElementById('btnReg').disabled = false;
        document.getElementById('linkalreadyaccount').style.pointerEvents = 'auto';
        this.setState({ name: event.target.value });
        let name = document.getElementById('name').value;
        let letters = /^[a-zA-Z ]+$/;
        if (!letters.test(name) || name.lenth < 3) {
            document.getElementById('name').style.borderBottom = "1px solid red";
        }
        else {
            document.getElementById('name').style.borderBottom = "1px solid green";

        }
    }
    // Below is function when any change made in Email input field onChange Validation also create.

    handleEmailChange = (event) => {
        document.getElementById('signUpclose').disabled = false;
        document.getElementById('btnReg').disabled = false;
        document.getElementById('linkalreadyaccount').style.pointerEvents = 'auto';
        this.setState({ email: event.target.value });
        let email = document.getElementById('email').value;
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            document.getElementById('email').style.borderBottom = '1px solid red';
        }
        else {
            document.getElementById('email').style.borderBottom = "1px solid green";
        }
    }
    // Below is function when any change made in userName input field onChange Validation also create.
    handleUserNameChange = (event) => {
        document.getElementById('signUpclose').disabled = false;
        document.getElementById('btnReg').disabled = false;
        document.getElementById('linkalreadyaccount').style.pointerEvents = 'auto';
        this.setState({ username: event.target.value });
        let userName = document.getElementById('userName').value;
        let letters = /^[a-z0-9]+$/i;
        if (!letters.test(userName) || userName.length < 4) {
            document.getElementById('userName').style.borderBottom = "1px solid red";
        }
        else {
            document.getElementById('userName').style.borderBottom = "1px solid green";
        }
    }
    // Below is function when any change made in password input field onChange Validation also create.
    handlePasswordChange = (event) => {
        document.getElementById('signUpclose').disabled = false;
        document.getElementById('btnReg').disabled = false;
        document.getElementById('linkalreadyaccount').style.pointerEvents = 'auto';
        this.setState({ password: event.target.value });
        let password = document.getElementById('pwd').value;
        let letters = /^[a-z0-9]+$/i;
        if (!letters.test(password) || password.length < 8) {
            document.getElementById('pwd').style.borderBottom = "1px solid red";
        }
        else {
            document.getElementById('pwd').style.borderBottom = "1px solid green";
        }
    }
    // Below is function when any change made in phone input field onChange Validation also create.
    handlePhoneChange = (event) => {
        document.getElementById('signUpclose').disabled = false;
        document.getElementById('btnReg').disabled = false;
        document.getElementById('linkalreadyaccount').style.pointerEvents = 'auto';
        this.setState({ phone: event.target.value });
        let phone = document.getElementById('phone').value;
        let letters = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
        if (!letters.test(phone)) {
            document.getElementById('phone').style.borderBottom = "1px solid red";
        }
        else {
            document.getElementById('phone').style.borderBottom = "1px solid green";

        }
    }
    // Below is function when any change made in address input field onChange Validation also create.
    handleAddressChange = (event) => {
        document.getElementById('signUpclose').disabled = false;
        document.getElementById('btnReg').disabled = false;
        document.getElementById('linkalreadyaccount').style.pointerEvents = 'auto';
        this.setState({ address: event.target.value });
        let address = document.getElementById('address').value;
        let letters = /^[a-z0-9]+/i;
        if (!letters.test(address)) {
            document.getElementById('address').style.borderBottom = "1px solid red";
        }
        else {
            document.getElementById('address').style.borderBottom = "1px solid green";
        }
    }
    // Below function will call when the user click on the Register Button
    // All validations are also called here to check valid data
    handleSubmit = (event) => {
        document.getElementById('linkalreadyaccount').style.pointerEvents = 'none';
        document.getElementById('btnReg').disabled = true;
        document.getElementById('signUpclose').disabled = true;
        obj = null;
        event.preventDefault();
        let check = true;//this is check for data is valid or not 
        if (check) {
            let field = document.getElementById('name').value;
            let letters = /^[a-zA-Z ]+$/;
            if (!letters.test(field) || field.length < 3) {
                document.getElementById('name').style.borderBottom = "1px solid red";
                check = false;

            }
            field = document.getElementById('email').value;
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field)) {

                document.getElementById('email').style.borderBottom = '1px solid red';
                check = false;
            }
            field = document.getElementById('userName').value;
            letters = /^[a-z0-9]+$/i;
            if (!letters.test(field) || field.length < 4) {
                document.getElementById('userName').style.borderBottom = "1px solid red";
                check = false;
            }
            let pwdPattern = /^[a-z0-9]+$/i;
            field = document.getElementById('pwd').value;
            if (!pwdPattern.test(field) || field.length < 8) {
                document.getElementById('pwd').style.borderBottom = "1px solid red";
                check = false;
            }
            field = document.getElementById('phone').value;
            letters = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
            if (!letters.test(field)) {
                document.getElementById('phone').style.borderBottom = "1px solid red";
                check = false;
            }
            let addressPattern = /^[a-z0-9]+/i;
            field = document.getElementById('address').value;
            if (!addressPattern.test(field)) {
                document.getElementById('address').style.borderBottom = '1px solid red';
                check = false;
            }

        }
        // if data is valid then here we will check that userName exist before or not if exist then error will 
        // show that user Name already exist. the userName will check in all tables.
        if (check) {
            Axios.post("/Signups/customerusernameCheck", {
                Email: this.state.username
            })
                .then(responce => {//console.log(responce.data);
                    this.setState(this.state.data = responce.data)
                    //console.log(this.state.data);

                    for (let i in this.state.data) {
                        obj = this.state.data[i];
                    }
                    if (obj === null) {
                        Axios.post("/Signups/mechanicusernameCheck", {
                            Email: this.state.username
                        })
                            .then(responce => {//console.log(responce.data);
                                this.setState(this.state.data = responce.data)
                                //console.log(this.state.data);

                                for (let i in this.state.data) {
                                    obj = this.state.data[i];
                                }
                                if (obj === null) {

                                    Axios.post("/Signups/adminusernameCheck", {
                                        Email: this.state.username
                                    })
                                        .then(responce => {//console.log(responce.data);
                                            this.setState(this.state.data = responce.data)
                                            //console.log(this.state.data);

                                            for (let i in this.state.data) {
                                                obj = this.state.data[i];
                                            }
                                            if (obj === null) {
                                                Axios.post("/Signups/signUp", {
                                                    Name: this.state.name,
                                                    Email: this.state.email,
                                                    UserName: this.state.username,
                                                    Password: this.state.password,
                                                    Phone: this.state.phone,
                                                    Address: this.state.address,
                                                    // status: this.state.status,
                                                    // sevices: this.state.service
                                                })
                                                    .then(responce => {
                                                        let a = responce.statusText;
                                                        if (a === 'OK') {
                                                            alert("coustomer sinup");
                                                            document.getElementById('btnReg').disabled = false;
                                                            document.getElementById('btnReg').style.backgroundColor = '#152036';
                                                            // document.getElementById('signUpModel').style.display='none';
                                                            // document.getElementById('signUpmessageModel').style.display='block';
                                                            this.props.history.push('/home');

                                                        }
                                                    })
                                                    .catch(error => { alert(error) })

                                            }//mechanic uniqueness check
                                            else {//if the user name is not unique
                                                document.getElementById('userName').select();
                                                alert("enter a different user name");
                                                document.getElementById('btnReg').disabled = true;
                                            }
                                        }).catch(err => console.log(err))

                                }//mechanic uniqueness check
                                else {//if the user name is not unique
                                    document.getElementById('userName').select();
                                    alert("enter a different user name");
                                    document.getElementById('btnReg').disabled = true;
                                }
                            })
                            .catch(err => console.log(err))
                    }//customer uniqueness check
                    else //if the user name is not unique
                    {
                        document.getElementById('userName').select();
                        alert("enter a different user name");
                        document.getElementById('btnReg').disabled = true;
                    }

                })
                .catch(err => console.log(err));
        }
    }
    // Below is function to show password when the user click on the field icon
    showPassword = (e) => {
        e.preventDefault();
        let pwd = document.getElementById('pwd');
        if (pwd.type === "text") {
            pwd.type = "password";
        }
        else {
            pwd.type = "text";
        }
    }
    // below is function to change the border color when use focus on input field
    myfocus = (a) => {
        // alert(a)
        document.getElementById(a).style.borderBottom = "1px solid black";
    }
    render() {
        const { data } = this.state;
        return (
            <div >
                <MyNav />
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/home' Component={Home} />
                    </Switch>
                </BrowserRouter>
                {/* <Modal backdrop='static' show={this.state.show} onHide={this.handleClose} id='signUpmessageModel' keyboard={false} >
                    <Modal.Body className='sign-modal-style'>
                        <h2>Sign Up Successfully</h2>
                        <Link to='/signIn'><Button id='signUpmessageclose' title='Close' style={{ color: 'White', float: 'right' }} >Close</Button></Link>                        
                    </Modal.Body>
                </Modal> */}
                <Modal backdrop='static' show={this.state.show} onHide={this.handleClose} id='signUpModel' keyboard={false}>
                    <Modal.Body className='sign-modal-style' id='signUpComponent'>
                        <h2 style={{ textAlign: "center" }}>Register</h2>
                        <Form id='signupform' className='signUpForm'>
                            <Row>
                                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                                    <input type="text" id='name' maxLength='31' onFocus={() => this.myfocus('name')} placeholder="Enter Name" onChange={this.handleNameChange} value={this.state.name} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                                    <input type="email" id='email' onFocus={() => this.myfocus('email')} placeholder="e.g me2@gmail.com" onChange={this.handleEmailChange} value={this.state.email} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                                    <input type="text" id='phone' maxLength='10' onFocus={() => this.myfocus('phone')} placeholder="300-0000000" onChange={this.handlePhoneChange} value={this.state.phone} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} lg={{ span: 10, offset: 1 }} id='eyeIcon'>
                                    <input type="text" id='userName' maxLength='15' onFocus={() => this.myfocus('userName')} placeholder="Enter User Name" onChange={this.handleUserNameChange} value={this.state.username} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                                    <input type="password" id='pwd' maxLength='15' onFocus={() => this.myfocus('pwd')} placeholder="Enter Password" onChange={this.handlePasswordChange} value={this.state.password} />
                                    <span title='Show Password' toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password" onClick={this.showPassword}></span>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                                    <input type="text" id='address' onFocus={() => this.myfocus('address')} placeholder="Enter Address" onChange={this.handleAddressChange} value={this.state.address} />
                                </Col>
                            </Row><br />
                            <Row>
                                <Col xs={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }}>
                                    <Button className="signupbtn" type='submit' id='btnReg' onClick={this.handleSubmit} title='Register'
                                    >Register</Button>
                                    <Link to='/home' style={{ color: 'White' }} ><Button type='submit' id='signUpclose' title='Close'>
                                        Close
                                </Button></Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} lg={{ span: 5, offset: 4 }}>
                                    <Link id='linkalreadyaccount' to='/SignIn' as='a' title='Already Have a Account' style={{ color: "black" }}>Already have a Account</Link>
                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body>
                </Modal>
                
            </div>
        );
    }
}

export default SignUp;
