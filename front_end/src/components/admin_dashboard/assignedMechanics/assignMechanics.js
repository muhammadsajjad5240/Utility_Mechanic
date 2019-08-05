import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import logo from '../../../images/logo.png';
import { Form, Row, Col } from 'react-bootstrap';
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../../home/home';
import './assignMechanics.css';
const qurryString = require("query-string");
let obj, newmechanic;
class AssignMechanics extends Component {
  constructor(props, context) {
    super(props, context);
    // this.handleShow = this.handleShow.bind(this);
    // this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: true,
      data: [],
      Orders: [],
      id:'',
      UserName: '',
      fullName: '',

      phone: '',
      address: '',
      category: '',
      service: '',
      DateAndTime: '',
      Status: '',
      // Mechanic: '',
      // MechanicUserName: '',
      Confirm: false,
      CPhone: "",
      CName: '',
      CUserName:'',
      CServices: "",
      CTime: ""

    };
  }
  const
  handleFullName = (e) => {
    this.setState({ fullName: e.target.value });

    axios.post("/Admin/get-machanic-by-Name", {
      Name: e.target.value
    }
    )
      .then(responce => {
        this.setState({ data: responce.data })
        for (let i in this.state.data) {
          newmechanic = this.state.data[i];
        };
        // console.log(responce.data);
        // console.log(this.state.UserName);
        newmechanic.map(option => {
          document.getElementById('mechanicName').innerHTML = option.Name;
          document.getElementById('mechanicAddress').innerHTML = option.Address;
          this.setState({ UserName: option.UserName })
          this.setState({ Phone: option.Phone })
        })
        // console.log(this.state.UserName);
      document.getElementById('btnassign').disabled = false;
      })
      .catch(error => { console.log(error) });
  }
  componentDidMount() {

    axios.post("/api//orders-by-id", {
      id: qurryString.parse(window.location.search).CName
    }
    )
      .then(responce => {
        this.setState({ Orders: responce.data })
        // for (let i in this.state.data) {
        //   newmechanic = this.state.data[i];
        // };
        console.log(responce.data);
        // console.log(obj);
        this.state.Orders.map(option => {

          console.log(option);
          console.log(option.fullName);
          this.setState({ CName: option.fullName })
          this.setState({ CPhone: option.phone })
          this.setState({ CServices: option.service })
          // this.setState({CTime:option.time})

        })
        console.log(this.state.CName);
        console.log(this.state.CTime);
      })
      .catch(error => { console.log(error) });
    // console.log(window.location.search)
    let pramerter = qurryString.parse(window.location.search)
    // console.log(pramerter.category)
    axios.post("/Admin/get-machanic-by-category", {
      category: pramerter.category,
      service: pramerter.service,
      active: true,
    }
    )
      .then(responce => {
        this.setState({ data: responce.data })
        for (let i in this.state.data) {
          obj = this.state.data[i];
        };
        // console.log(responce.data);
        // console.log(obj);

        let myselect = document.getElementById('serviceCategory');
        let innertext = '';
        obj.map(option => {
          // console.log(option)
          let mytag = document.createElement('option');
          // innertext = document.createTextNode(option.Name);
          innertext = document.createTextNode(option.Name)
          mytag.appendChild(innertext);
          // mytag.value= option.Name;
          // myselect.insertBefore(mytag, myselect.lastChild);
          myselect.appendChild(mytag);
        })
        document.getElementById('serviceCategory').disabled= false;
      })
      .catch(error => { console.log(error) });

  }//componentdidmount end
  // handleClose() {
  //   this.setState({ show: false });
  // }
  // handleShow() {
  //   this.setState({ show: true });
  // }
  // hideBorder = () => {
  //   document.getElementById('fullName').style.outline = 'none'
  // }
  handleAssign = (event) => {
    event.preventDefault();
    document.getElementById('btnassign').disabled = true;
    // console.log(qurryString.parse(window.location.search).CName);
    axios.post("/Admin/assign-Machanic-by-Admin", {
      Status: 'In Process',
      Id: qurryString.parse(window.location.search).CName,
      Phone: this.state.Phone,
      CServices: this.state.CServices,
    })
      .then(responce => {
        let a = responce.statusText;
        if (a === 'OK') {
          this.state.Orders.map(order => {
           this.setState({ 
             id : order._id,
            CUserName : order.UserName,
            CName : order.fullName,
            phone : order.phone,
            address : order.address,
            category : order.category,
            service : order.service,
            DateAndTime : order.DateAndTime,
            Status : order.Status,
            Mechanic : order.Mechanic,
            MechanicUserName : order.MechanicUserName,
            Confirm : false,
           })
          })
          axios.post('/Admin/post-task-to-mechanics',{
          id: this.state.id,
          UserName : this.state.CUserName,
          fullName : this.state.CName,
          phone : this.state.phone,
          address : this.state.address,
          category : this.state.category,
          service : this.state.service,
          DateAndTime : this.state.DateAndTime,
          Status : this.state.Status,
          Mechanic : this.state.fullName,
          MechanicUserName :this.state.UserName,
          Confirm : false,
        })
            .then(responce => console.log(responce.data))
            .catch(error => alert(error))


           alert("Order Assign Successfully");
           window.location.assign("/orders?id=" + qurryString.parse(window.location.search).id + "&User=" + qurryString.parse(window.location.search).User);
        }
      }
      )//here the then method end

      .catch(error => alert(error))

  }
  render() {
    const { data } = this.state;
    return (
      <div id='assignedMechanics'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/home' Component={Home} />
          </Switch>
        </BrowserRouter>
        <Modal backdrop='static' show={this.state.show} onHide={this.handleClose} className='modal-styles'>
          <Modal.Header className='assigned-modal-style'>
            <Modal.Title>
              <Row>
                <Col lg={{ span: 12, offset: 0 }}>
                  <center><h3>Assign Mechanics</h3></center>
                </Col>
              </Row>
            </Modal.Title><br />
          </Modal.Header>
          <Modal.Body className='assigned-modal-style'>
            <Form>
              <Form.Row>
                <Col>
                  <select disabled id='serviceCategory' value={this.state.fullName} onChange={this.handleFullName} >
                    <option selected disabled>Select Mechanic</option>

                  </select>
                </Col>
              </Form.Row>
            </Form><br />
            <Row>
              <Col>
                <img src={logo} alt='Mechanics' className='mechanicsPic' />
              </Col>
              <Col><br />
                <span id='mechanicName' ></span><br />
                <span id='mechanicAddress'></span><br /><br />
                <Button id='btnassign' variant="secondary" onClick={this.handleAssign} className='assignBtn'>Assign</Button>
              </Col>
            </Row>

          </Modal.Body>
          <Modal.Footer className='assigned-modal-style'>
            <Link to={"/orders?id=" + qurryString.parse(window.location.search).id + "&User=" + qurryString.parse(window.location.search).User} style={{ color: 'White' }} ><Button variant="danger" onClick={this.handleClose} >
              Close
            </Button></Link>

          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default AssignMechanics;