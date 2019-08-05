import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import logo from '../../images/logo.png';
import {  Form,  Row, Col } from 'react-bootstrap';
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../home/home';
import MyNav from '../navbar/navbar';
import './signin.css';
let obj = null; 
class SignIn extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handlesubmit= this.myfocus.bind(this);
    this.putDataToDB=this.putDataToDB.bind(this);
    this.state = {
      show: true,
      data: [],
      id: 0,
      Email: null,
      PassWord: ''
    };
  }
  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }
  putDataToDB = (event) => {
    //signclose
    document.getElementById('btnsignin').disabled= true;
    document.getElementById('signclose').disabled= true;
    event.preventDefault();
    let check= true;
   let userName = document.getElementById('username').value;
    let letters = /^[a-zA-Z]+/;
    //alert(check);
      if (!letters.test(userName)) {
          document.getElementById('username').style.borderBottom = "1px solid red";
          check=false;
      }
      //alert(check);
      var password = document.getElementById('pwd').value;
      if(password.length===0){
          document.getElementById('pwd').style.borderBottom = "1px solid red";
          check=false;
      }
      //alert(check);
  if(check)
  {
    axios.post("/Signin/customerlogin", {
      Email:  this.state.Email,
      PassWord: this.state.PassWord
    })
    .then(responce=> {//console.log(responce.data);
      this.setState(this.state.data = responce.data)
      //console.log(this.state.data);
      
      for(let i in this.state.data)
      {
        obj = this.state.data[i];
      }
      if(obj!==null)
      {
        // alert(obj);
        window.location.replace("/") 
        window.open("/customer-home?id="+obj._id+"&User=" +obj.Name)
      }
      else //if(Index===1) condition true if the user is not the coustomer 
      {
        axios.post("/Signin/Machaniclogin", {
          Email:  this.state.Email,
          PassWord: this.state.PassWord
        })
        .then(responce=> {//console.log(responce.data);
          this.setState(this.state.data = responce.data)
          //console.log(this.state.data);
          
          for(let i in this.state.data)
          {
            obj = this.state.data[i];
          
          }
          if(obj!==null)
          {
            window.location.replace("/")
            // alert(obj);
            // alert(obj._id);
            window.open("/Mechanic-Dashboard?id="+obj._id+"&User=" +obj.Name)
          }
          else //if(Index===2) condition true if the user is not match with the machanic Account 
          {
            axios.post("/Signin/adminlogin", {
              Email:  this.state.Email,
              PassWord: this.state.PassWord
            })
            .then(responce=> {//console.log(responce.data);
              this.setState(this.state.data = responce.data)
              //console.log(this.state.data);
              
              for(let i in this.state.data)
              {
                obj = this.state.data[i];
              
              }
              if(obj!==null)
            {
              window.location.replace("/")
              window.open("/dashboard-home?id="+obj._id+"&User=" +obj.Name)
            }
            if(obj===null)
            {
              document.getElementById('username').select();
              alert('Uesr Name or Password Wrong');
              document.getElementById('btnsignin').disabled= false;
              document.getElementById('signclose').disabled= false;
            }
            })
            .catch(error=>{
              console.log(error);
              alert(error);
              
            });
          }//here third condition end for admin
        })
        .catch(error=>{
          if(obj===null)
          {
            alert('uesr name or password wrong ');
            document.getElementById('btnsignin').disabled= false;
            document.getElementById('signclose').disabled= false;
          }
          else
          {
            console.log(error);
          alert(error);
          }
          
        });
      }//here the else if end
    })
    .catch(error=>{
      if(obj===null)
      {
        alert('uesr name or password wrong ');
        document.getElementById('btnsignin').disabled= false;
        document.getElementById('signclose').disabled= false;
      }
      else
      {
        console.log(error);
      alert(error);
      }
      
    });
    
  }//here the check condition end
  
  return check;
  };
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
  myfocus=(a)=>
  {
    // alert(a)
    document.getElementById(a).style.borderBottom = "1px solid white";
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <MyNav/>
        <BrowserRouter>
          <Switch>
            <Route exact path='/home' Component={Home} />
          </Switch>
        </BrowserRouter>
        <Modal backdrop='static' show={this.state.show}  onHide={this.handleClose} className='modal-style' keyboard={false}>
          <Modal.Header className='sign-modal-style'>
            <Row>
              <Col xs={12} lg={{ span: 10, offset: 0 }}>
                <img src={logo} alt='Logo' className='signInLogo' />
              </Col>
            </Row>
          </Modal.Header>
          <Modal.Body className='sign-modal-style'>
            <Form className='signInFormStyle'>
              <Row>
                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                  <input id='username' onFocus={()=>this.myfocus('username')}
                  onChange={e =>{ this.setState({ Email: e.target.value });
                  document.getElementById('btnsignin').disabled= false;
                  document.getElementById('signclose').disabled= false;
                }} type="text" placeholder="Enter UserName"  />
                </Col>
              </Row><br />
              <Row>
                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                  <input id='pwd' onFocus={()=>this.myfocus('pwd')} onChange={e =>{this.setState({ PassWord: e.target.value });
                   document.getElementById('btnsignin').disabled= false;
                   document.getElementById('signclose').disabled= false;
                }} type="password" placeholder="Password"  />
                  <span title='Show Password' toggle="#password-field" class="fa fa-fw fa-eye toggle-password" id='signInfield-icon' onClick={this.showPassword}></span>                  

                </Col>
              </Row><br />
              <Row>
                <Col xs={12} lg={{ span: 10, offset: 1 }}>
                  <Button type='submit' variant="success" id='btnsignin' className='signInBtn' onClick={this.putDataToDB}> Sign In</Button>
                </Col>
              </Row>
              <center>OR</center>
            </Form>
            <Row>
              <Col xs={12} lg={{ span: 10, offset: 1 }}>
                 <Link to='/home' style={{ color: 'White'}} ><Button type='submit' id='signclose'>
                  Close
                </Button></Link><br />
              </Col>
            </Row><br/>
            <Row>
              <Col xs={{ span: 6, offset: 4 }} lg={{ span: 8, offset: 4 }}>
                <Link to='/reset-password' title='Forget Password'>Forget Password</Link><br />
              </Col>
            </Row>

          </Modal.Body>
          <Modal.Footer className='sign-modal-style'>
            <br/>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SignIn;