import React, { Component } from 'react';
import { Form, Row, Col, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Dashboard-Home.css';
import axios from 'axios';
const qurryString = require("query-string");
let obj;
let my;
class UserHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };
  inputchange = (e) => {
    switch (e.target.name) {
      case 'myimage':
        this.setState({ selectedFile: e.target.files[0] });
        document.getElementById('btnchang').disabled = false;
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }

  }
  saveImage = (e) => {

    e.preventDefault();
    const { selectedFile } = this.state;
    let formData = new FormData();
    formData.append('myimage', selectedFile);
    axios.post('/Profile/upload', formData)
      .then(responce => {
        // console.log(responce.data)
        let data = qurryString.parse(window.location.search).id
        // console.log(data)
        axios.post("/Profile/delete-Profile", { Id: qurryString.parse(window.location.search).id })
          .then(responce => {
            // console.log(responce.data)
            axios.post('/Profile/profile-image', { data: data })
              .then(responce => {
                // console.log(responce.data)
                window.location.reload();
              })
              .catch(erroe => {
                console.log(erroe)
              })
          })//delete prifile image route then end
          .catch(error => console.log(error))//
      })//upload image route then end
      .catch(erroe => {
        console.log(erroe)
        alert("something went wrong check console Window")
        console.log("check the file size not grather than 1MB")
      }
      )
  }
  componentDidMount() {
    let pramerter = qurryString.parse(window.location.search)
    // console.log(window.location.search)
    axios.post("/Mechanic/getmachanic", {
      Id: pramerter.id
    })
      .then(responce => {
        console.log(responce.data)
        this.setState({ data: responce.data })
        for (let i in this.state.data) {
          obj = this.state.data[i];
        };

        obj.map(obj => {
          //  console.log(obj)
          document.getElementById('Mechanicname').innerHTML = obj.Name;
          document.getElementById('mail').innerHTML = obj.Email;
          document.getElementById('Uname').innerHTML = obj.UserName;
          document.getElementById('password').innerHTML = obj.Password;
          document.getElementById('phone').innerHTML = obj.Phone;
          document.getElementById('address').innerHTML = obj.Address;
          document.getElementById('Status').innerHTML = obj.status;
          document.getElementById('service').innerHTML = obj.sevices;
          document.getElementById('active').innerHTML = obj.Active;
          //active

        })
        //  console.log(obj)
        //  console.log(obj.Profile);

      })
      .catch(error => { console.log(error) });
    axios.post("/Profile/imgget", { Id: pramerter.id })
      .then(responce => {//console.log(responce.data);
        this.setState({ img: responce.data })
        //console.log(this.state.img);
        this.setState(this.state.data = responce.data)
        for (let i in this.state.data) {
          obj = this.state.data[i];
        };
        // console.log(responce.data)
        const base64Flag = 'data:image/png;base64,';
        // console.log(this.arrayBufferToBase64(obj.img.data.data));
        const imageStr = this.arrayBufferToBase64(obj.img.data.data)
        my = base64Flag + imageStr;
        // console.log(my);
        this.setState({ img: my })
        // console.log(this.state.img);

      })//hello
      .catch(error => {
        console.log(error);
        // alert("set your profile image first");
      });
   

  }
  render() {
    return (
      <div id='mechanicHhome'>
        <Row>
          <Col sm={12} lg={5}>
            <div style={{ width: '400px', height: '350px' }}>
              <center> <img src={my}
                style={{ width: '300px', height: '250px', marginTop: '20px', marginLeft: '20px', borderRadius: "100%" }}
              />
              </center>
              <center>
                <input
                  style={{ marginTop: '8%', marginLeft: '20%' }}
                  id="chosefile"
                  type="file"
                  name="myimage"
                  onChange={this.inputchange} />
              </center>
              <Form onSubmit={this.saveImage}>
                <br />
                <br />
                <center><Button disabled id='btnchang' variant="primary" type="submit">Save</Button></center>
              </Form>
            </div>
            <br />
            <br />
          </Col>
          <Col className='infocol' sm={{ span: 10, offset: 2 }} lg={{ span: 5, offset: 2 }}>

            <Table responsive striped bordered><br /> <br />
              <h4>Perosnal Info</h4>
              <tr>
                <th>Name:</th>
                <td id="Mechanicname"></td>
              </tr>
              <tr>
                <th>Email:</th>
                <td id="mail"></td>
              </tr>
              <tr>
                <th>User Name:</th>
                <td id="Uname"></td>
              </tr>
              <tr>
                <th>Password:</th>
                <td id='password'></td>
              </tr>
              <tr>
                <th>Phone No:</th>
                <td id='phone'></td>
              </tr>
              <tr>
                <th>Address:</th>
                <td id='address' ></td>
              </tr>
              <tr>
                <th>Status:</th>
                <td id='Status' ></td>
              </tr>
              <tr>
                <th>Service:</th>
                <td id='service' ></td>
              </tr>
              <tr>
                <th>Active:</th>
                <td id='active' ></td>
              </tr>
            </Table><br />

            <center> <Link to={'#'}>
              <Button type='button' variant="primary" size="sm" type='submit'  >Update</Button></Link></center>
          </Col>
        </Row>
      </div>
    );
  }
}
export default UserHome;