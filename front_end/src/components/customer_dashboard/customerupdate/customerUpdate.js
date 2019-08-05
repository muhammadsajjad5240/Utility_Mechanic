import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import logo from '../../../images/logo.png';
import { Form, Row, Col } from 'react-bootstrap';
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import CustomerHome from '../../customer_dashboard/customer-home/Customer-Home';
import axios from 'axios';
let obj;
const qurryString = require("query-string");
class UpdateCustomerRecord extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: true,
      data: [],
      fullName: '',
      email: '',
      userName: '',
      password: '',
      phone: '',
      address: '',
    };
  }
  handleNameChange = (event) => {
    this.setState({ fullName: event.target.value });
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }
  handleUserNameChange = (event) => {
    this.setState({ userName: event.target.value });
  }
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }
  handlePhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  }
  handleAddressChange = (event) => {
    this.setState({ address: event.target.value });
  }

  componentDidMount() {
    let obj;
    console.log(window.location.search)
    let pramerter = qurryString.parse(window.location.search)
    console.log(pramerter.id)
    axios.post("/Customer/getcustomer", {
      Id: pramerter.id
    })
      .then(responce => {
        this.setState(this.state.data = responce.data)
        //  this.handlestate();
        for (let i in this.state.data) {
          obj = this.state.data[i];
        };

        this.setState({ userName: obj.UserName })
        this.setState({ email: obj.Email })
        this.setState({ fullName: obj.Name })
        this.setState({ password: obj.Password })
        this.setState({ phone: obj.Phone })
        this.setState({ address: obj.Address });
        document.getElementById('Username').value = obj.UserName;
        document.getElementById('fullname').value = obj.Name;
        document.getElementById('email').value = obj.Email;
        document.getElementById('phone').value = obj.Phone;
        document.getElementById('address').value = obj.Address;
        document.getElementById('password').value = obj.Password;
      })
      .catch(error => { console.log(error) });
  }//componente did mount funcation end

  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }
  hideBorder = () => {
    document.getElementById('fullName').style.outline = 'none'
  }

  handleSubmit = (event) => {
    obj = null;
    event.preventDefault();
    let check = true;//this is check for data is valid or not 
    if (check) {
      let field = document.getElementById('fullname').value;


      let letters = /^[a-zA-Z]+$/;
      if (!letters.test(field)) {
        document.getElementById('fullname').style.borderBottom = "1px solid red";
        check = false;

      }

      field = document.getElementById('email').value;
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field)) {

        document.getElementById('email').style.borderBottom = '1px solid red';
        check = false;
      }
      // field = document.getElementById('userName').value;
      // letters = /^[a-zA-Z]+/;
      // if (!letters.test(field)) {
      //     document.getElementById('userName').style.border = "1px solid red";
      //     check=false;
      // }

      field = document.getElementById('password').value;
      if (field.length === 0) {
        document.getElementById('password').style.borderBottom = "1px solid red";
        check = false;
      }
      field = document.getElementById('phone').value;
      letters = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
      // var phoneResult = phoneRGEX.test(phoneNumber);
      if (!letters.test(field)) {
        document.getElementById('phone').style.borderBottom = "1px solid red";
        check = false;
      }
      field = document.getElementById('address').value;
      if (field.length === 0) {
        document.getElementById('address').style.borderBottom = '1px solid red';
        check = false;
      }

    }//here the validation check is end 
    if (check) {
      console.log(this.state.fullName);

      axios.post("/Customer/update-coustomer", {

        Name: this.state.fullName,
        Email: this.state.email,
        UserName: this.state.userName,
        Password: this.state.password,
        Phone: this.state.phone,
        Address: this.state.address,
      })

        .then(responce => {
          let a = responce.statusText;
          if (a === 'OK') {
            alert("Record Updated Successfully");
            window.location.assign("/customer-home?id=" + qurryString.parse(window.location.search).id+"&User="+qurryString.parse(window.location.search).User);
          }
        })
        .catch(error => { alert(error) })
    }
  }
  myfocus = (a) => {
    // alert(a)
    document.getElementById(a).style.borderBottom = "1px solid white";
  }
  render() {
    // const { data } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/customer-home' Component={CustomerHome} />
          </Switch>
        </BrowserRouter>
        <Modal backdrop='static' show={this.state.show} onHide={this.handleClose} className='modal-style'>
          <Modal.Header className='sign-modal-style'>
            <Modal.Title>
              <Row>
                <Col lg={{ span: 6, offset: 3 }}>
                  {/* <h3>Update</h3> */}
                </Col>
              </Row>
            </Modal.Title><br />
            <Row>
              <Col xs={12} lg={{ span: 10, offset: 1 }}>
                <center>   <img src={logo} alt='Logo' className='signInLogo' /></center>
              </Col>
            </Row>
          </Modal.Header>
          <Modal.Body className='sign-modal-style'>
            <Form className='signInFormStyle'>
              <Row>
                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                  <input type='text' readOnly={true} placeholder="User Name" id='Username' onChange={this.handleUserNameChange} value={this.state.userName} />
                </Col>
              </Row><br />
              <Row>
                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                  <input type='text' placeholder="Full Name" id='fullname' onFocus={() => this.myfocus('fullname')} onChange={this.handleNameChange} value={this.state.fullName} />
                </Col>
              </Row><br />
              <Row>
                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                  <input type='text' placeholder="Password" id='password' onFocus={() => this.myfocus('password')} onChange={this.handlePasswordChange} value={this.state.password} />
                </Col>
              </Row><br />
              <Row>
                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                  <input type='email' placeholder="Email" id='email' onFocus={() => this.myfocus('email')} onChange={this.handleEmailChange} value={this.state.email} />
                </Col>
              </Row><br />
              <Row>
                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                  <input type='text' placeholder="Phone No" id='phone' onFocus={() => this.myfocus('phone')} onChange={this.handlePhoneChange} value={this.state.phone} />
                </Col>
              </Row><br />
              <Row>
                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                  <input type='text' placeholder="Address" id='address' onFocus={() => this.myfocus('address')} onChange={this.handleAddressChange} value={this.state.address} />
                </Col>
              </Row><br />
              <Row>
                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                  <Link to=''><Button type='submit' onClick={this.handleSubmit} variant="success" className='signInBtn'>Update</Button></Link>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                  <Link to={"/customer-home?id=" + qurryString.parse(window.location.search).id +"&User="+qurryString.parse(window.location.search).User} style={{ color: 'White' }} ><Button variant='danger' className='signInBtn'>
                    Close</Button>
                  </Link>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default UpdateCustomerRecord;