import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import logo from '../../../images/logo.png';
import { InputGroup, FormControl, Form, Container, Row, Col } from 'react-bootstrap';
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import CustomerHome from '../../customer_dashboard/customer-home/Customer-Home';
class UpdateMechanicRecord extends Component {
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
      address: ''
      //   id: 0,
      //   Email: null,
      //   PassWord: null,
      //   intervalIsSet: false,
      //   idToDelete: null,
      //   idToUpdate: null,
      //   objectToUpdate: null
    };
  }
  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }
  hideBorder = () => {
    document.getElementById('fullName').style.outline = 'none'
  }
  render() {
    const { data } = this.state;
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
                <img src={logo} alt='Logo' className='signInLogo' />
              </Col>
            </Row>
          </Modal.Header>
          <Modal.Body className='sign-modal-style'>
            <Form className='signInFormStyle'>
              <Row>
                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                  <input type='text' placeholder="User Name" id='fullName' />
                </Col>
              </Row><br />
              <Row>
                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                  <input type='password' placeholder="Password" id='password' />
                </Col>
              </Row><br />
              <Row>
                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                  <input type='email' placeholder="Email" id='email' />
                </Col>
              </Row><br />
              <Row>
                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                  <input type='text' placeholder="Phone No" id='phone' />
                </Col>
              </Row><br />
              <Row>
                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                  <input type='text' placeholder="Address" id='address' />
                </Col>
              </Row><br />
              <Row>
                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                  <select id='status' >
                    <option disabled selected>Select Status</option>
                    <option>Mechanic</option>
                    <option>Manager</option>
                  </select>
                </Col>
              </Row><br />
              <Row>
                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                  <select id='searchCategory' >
                    <option disabled selected>Select Service</option>
                    <option>AC Repairing</option>
                    <option>Electrician</option>
                    <option>Car Painter</option>
                    <option>Plumber</option>
                    <option>TV Service</option>
                    <option>Vehicle Repairing</option>
                    <option>Home Cleaning</option>
                    <option>Elevator Service</option>
                    <option>Sewing Machine</option>
                    <option>Water Dispenser</option>
                    <option>Painter</option>
                    <option>Mazdoor</option>
                    <option>Iron Man</option>
                  </select>
                </Col>
              </Row><br />
              <Row>
                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                  <Link to='/dashboard-home'><Button variant="success" >Update</Button></Link>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer className='sign-modal-style'>
            <Button variant="danger" onClick={this.handleClose} >
              <Link to='/home' style={{ color: 'White' }} > Close</Link>
            </Button>

          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default UpdateMechanicRecord;