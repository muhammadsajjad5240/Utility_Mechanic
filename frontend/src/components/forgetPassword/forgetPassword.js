import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import logo from '../../images/logo.png';
import { Form, Row, Col, Alert } from 'react-bootstrap';
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../home/home';
import Axios from 'axios';
import MyNav from '../navbar/navbar';
import './forgetPassword.css';
import { number } from 'prop-types';
let obj = null;
class SignIn extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: true,
            data: [],
            Email: null,
            PassWord: '',
            cmphone: "",
            phone: '',
            fusername: "",
            code: ''
        };
    }
    handleConfirmationCode = event => {
        document.getElementById('btnsignin').disabled = false;
        document.getElementById('signclose').disabled = false;
        this.setState({ code: event.target.value })
        let field = document.getElementById('confirmationCode').value;
        let letters = /^[0-9]+$/i;
        if (!letters.test(field)) {
            document.getElementById('confirmationCode').style.borderBottom = "1px solid red";
        }
        else {
            document.getElementById('confirmationCode').style.borderBottom = "1px solid green";

        }

    }
    handlePhoneChange = (event) => {

        document.getElementById('btnsignin').disabled = false;
        document.getElementById('signclose').disabled = false;
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
    handlePasswordChange = (event) => {
        document.getElementById('btnsignin').disabled = false;
        document.getElementById('signclose').disabled = false;
        this.setState({ PassWord: event.target.value });
        let password = document.getElementById('password').value;
        let letters = /^[a-z0-9]+$/i;
        if (!letters.test(password) || password.length < 8) {
            document.getElementById('password').style.borderBottom = "1px solid red";
        }
        else {
            document.getElementById('password').style.borderBottom = "1px solid green";
        }
    }
    handleUserNameChange = (event) => {
        document.getElementById('btnsignin').disabled = false;
        document.getElementById('signclose').disabled = false;
        this.setState({ Email: event.target.value });
        let userName = document.getElementById('username').value;
        let letters = /^[a-z0-9]+$/i;
        if (!letters.test(userName) || userName.length < 4) {
            document.getElementById('username').style.borderBottom = "1px solid red";
        }
        else {
            document.getElementById('username').style.borderBottom = "1px solid green";
        }
    }
    showPassword = (e) => {
        e.preventDefault();
        let pwd = document.getElementById('password');
        if (pwd.type === "text") {
            pwd.type = "password";
        }
        else {
            pwd.type = "text";
        }
    }
    componentDidMount() {
        document.getElementById('password').style.display = 'none';
        document.getElementById('confirmationCode').style.display = 'none';
        document.getElementById('showpwd').style.display = 'none';
        document.getElementById('phone').style.display = 'none';


    }
    handleClose() {
        this.setState({ show: false });
    }
    handleShow() {
        this.setState({ show: true });
    }
    resetpassword = (e) => {
        let check = true;
        let field, letters
        e.preventDefault();

        let btncheck = document.getElementById('btnsignin').innerHTML;
        if (btncheck === 'Next') {
            document.getElementById('btnsignin').disabled = true
            document.getElementById('signclose').disabled = true
            field = document.getElementById('username').value;
            letters = /^[a-z0-9]+$/i;
            if (!letters.test(field) || field.length < 4) {
                document.getElementById('username').style.borderBottom = "1px solid red";
                check = false;
            }
            if (check) {
                Axios.post("/Signups/customerusernameCheck", {
                    Email: this.state.Email
                })
                    .then(responce => {
                        // console.log(responce.data)
                        this.setState(this.state.data = responce.data)
                        //console.log(this.state.data);

                        for (let i in this.state.data) {
                            obj = this.state.data[i];
                        }
                        if (obj !== null) {
                            this.setState({ cmphone: obj.Phone, fusername: obj.UserName })
                            document.getElementById('username').style.display = 'none';
                            document.getElementById('phone').style.display = 'block';
                            document.getElementById('btnsignin').innerHTML = "Send Code"
                        }
                        else {//if username not match with customer name
                            Axios.post("/Signups/mechanicusernameCheck", {
                    Email: this.state.Email
                })
                    .then(responce => {
                        // console.log(responce.data)
                        this.setState(this.state.data = responce.data)
                        //console.log(this.state.data);

                        for (let i in this.state.data) {
                            obj = this.state.data[i];
                        }
                        if (obj !== null) {
                            this.setState({ cmphone: obj.Phone, fusername: obj.UserName })
                            document.getElementById('username').style.display = 'none';
                            document.getElementById('phone').style.display = 'block';
                            document.getElementById('btnsignin').innerHTML = "Send Code"
                        }
                        else {//if user name not match with mechanic user name
                            Axios.post("/Signups/adminusernameCheck", {
                    Email: this.state.Email
                })
                    .then(responce => {
                        // console.log(responce.data)
                        this.setState(this.state.data = responce.data)
                        //console.log(this.state.data);

                        for (let i in this.state.data) {
                            obj = this.state.data[i];
                        }
                        if (obj !== null) {
                            this.setState({ cmphone: obj.Phone, fusername: obj.UserName })
                            document.getElementById('username').style.display = 'none';
                            document.getElementById('phone').style.display = 'block';
                            document.getElementById('btnsignin').innerHTML = "Send Code"
                        }
                        else {
                            alert("User name not exist")
                        }
                    })
                    .catch(err => console.log(err))
                        }
                    })
                    .catch(err => console.log(err))
                        }
                    })
                    .catch(err => console.log(err))
            }//validation condition true 
        }//Next button end 
        else if (btncheck === "Send Code") {
            document.getElementById('btnsignin').disabled = true
            document.getElementById('signclose').disabled = true
            field = document.getElementById('phone').value;
            letters = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
            if (!letters.test(field)) {
                document.getElementById('phone').style.borderBottom = "1px solid red";
                check = false;
            }
            if (check) {
                if (this.state.phone === this.state.cmphone) {
                    let val = Math.floor(1000 + Math.random() * 9000);
                    Axios.post("/Customer/rest-code", { Code: val, UserName: this.state.fusername, phone: this.state.cmphone })
                        .then(responce => {
                            // console.log(responce.data)
                            alert("code send to your phone number valid for 1 minute\nif you are not recive code resned it after 1 minute")
                            document.getElementById('phone').style.display = 'none';
                            document.getElementById('confirmationCode').style.display = 'block';
                            document.getElementById('btnsignin').innerHTML = "Confirm"
                        })
                        .catch(err => console.log(err))
                }
                else {
                    alert("This number not register against you account")
                }
            }//validation condition end
        }
        else if (btncheck === 'Confirm') {
            document.getElementById('btnsignin').disabled = true
            document.getElementById('signclose').disabled = true
            field = document.getElementById('confirmationCode').value;
            letters = /^[0-9]+$/i;
            if (!letters.test(field)) {
                document.getElementById('confirmationCode').style.borderBottom = "1px solid red";
                check = false;
            }
            if (check) {
                let a = document.getElementById('confirmationCode').value
                a = parseInt(a);
                Axios.post('/Customer/confirm-rest-code', { Code: a })
                    .then(responce => {
                        if (responce.data.length !== 0) {
                            document.getElementById('confirmationCode').style.display = 'none';
                            document.getElementById('password').style.display = 'block';
                            document.getElementById('showpwd').style.display = 'block';
                            document.getElementById('btnsignin').innerHTML = "Rest Password"
                        }
                        else {
                            alert("Code Expire")
                        }
                    })
            }
        }
        else if (btncheck === 'Rest Password') {
            document.getElementById('btnsignin').disabled = true
            document.getElementById('signclose').disabled = true
            let pwdPattern = /^[a-z0-9]+$/i;
            field = document.getElementById('password').value;
            if (!pwdPattern.test(field) || field.length < 8) {
                document.getElementById('password').style.borderBottom = "1px solid red";
                check = false;
            }
            if (check) {
                Axios.post('/Customer/rest-password', { UserName: this.state.fusername,password:this.state.PassWord})
                .then(responce => {
                // console.log(responce.data)
                if(responce.data.ok===1)
                {
                    alert('Password Reset')
                    window.location.replace("/signIn")
                }
            })
            .catch(err=>console.log(err));
            }
        }

    }
    myfocus = (a) => {
        // alert(a)
        document.getElementById(a).style.borderBottom = "1px solid white";
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <MyNav />
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/home' Component={Home} />
                    </Switch>
                </BrowserRouter>
                <Modal keyboard={false} backdrop='static' show={this.state.show} size='sm' onHide={this.handleClose} className='modal-style'>
                    <Modal.Header className='sign-modal-style'>
                        <h2>Reset Password</h2>
                    </Modal.Header>
                    <Modal.Body className='sign-modal-style'>
                        <Form className='signInFormStyle'>
                            <Row>
                                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                                    <input id='username' title='User Name' onFocus={() => this.myfocus('username')} type="text" placeholder="Enter UserName" value={this.state.userName} onChange={this.handleUserNameChange} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                                    <input type="text" id='phone' onFocus={() => this.myfocus('phone')} placeholder="Enter Register No 300-0000000" onChange={this.handlePhoneChange} value={this.state.phone} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                                    <input id='confirmationCode' title='Confirmation Code' maxLength='4' onFocus={() => this.myfocus('confirmationCode')} type="text" placeholder="Confirmation Code" value={this.state.confirmationCode} onChange={this.handleConfirmationCode} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                                    <input id='password' title='New Password' maxLength='15' onFocus={() => this.myfocus('password')} type="password" placeholder="New Password" value={this.state.password} onChange={this.handlePasswordChange} />
                                    {/* <span title='Show Password' toggle="#password-field" class="fa fa-fw fa-eye toggle-password" id='resetfield-icon' onClick={this.showPassword}></span> */}
                                    <Form.Group id="formGridCheckbox">
                                        <span id="showpwd" style={{ marginLeft: '3%', cursor: 'pointer' }} title="Show Password" onClick={this.showPassword}  >Show Password</span>
                                    </Form.Group>
                                </Col>
                            </Row><br />
                            <Row>
                                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                                    <Button type='submit' variant="success" id='btnsignin' className='signInBtn' onClick={this.resetpassword}>Next</Button>
                                </Col>
                            </Row>
                        </Form>
                        <br />
                        <Row>
                            <Col xs={12} lg={{ span: 10, offset: 1 }}>
                                <Link to='/signIn' style={{ color: 'White' }} ><Button type='submit' id='signclose'>
                                    Close
                </Button></Link><br />
                            </Col>
                        </Row>

                    </Modal.Body>
                    <Modal.Footer className='sign-modal-style'>
                        <br />
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default SignIn;