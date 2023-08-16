import React, { Component } from 'react';
import './ourServices.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Table, Button, Form } from 'react-bootstrap';
let a = 1;
class OurServices extends Component {
    constructor(props) {
        super(props);
        this.handleServiceId = this.handleServiceId.bind(this);
        this.handleServiceName = this.handleServiceName.bind(this);
        this.handleServiceCategory = this.handleServiceCategory.bind(this);
        this.handleServicePrice = this.handleServicePrice.bind(this);
        this.handlesearchSeviceName = this.handlesearchSeviceName.bind(this);
        this.handlesearchServiceCategory = this.handlesearchServiceCategory.bind(this);
        this.closeSideNav = this.closeSideNav.bind(this);
        this.handleAddService = this.handleAddService.bind(this);
        this.searchServiceForm = this.searchServiceForm.bind(this);
        this.state = {
            serviceId: 'wswsdr',
            serviceName: '',
            serviceCategory: 'Select Service',
            servicePrice: '',
            searchSeviceName: '',
            searchServiceCategory: 'Select Service'
        }
        this.state = {
            services: []
        };
    }
    handleServiceId = (e) => {
        this.setState({ serviceId: e.target.value });
    }
    handleServiceName = (e) => {
        this.setState({ serviceName: e.target.value });
    }
    handleServiceCategory = (e) => {
        this.setState({ serviceCategory: e.target.value });
    }
    handleServicePrice = (e) => {
        this.setState({ servicePrice: e.target.value });
    }
    handlesearchSeviceName = (e) => {
        this.setState({ searchSeviceName: e.target.value });
    }
    handlesearchServiceCategory = (e) => {
        this.setState({ searchServiceCategory: e.target.value });
    }
    closeSideNav = () => {
        if (a === 1) {
            document.getElementById('sideNav').style.display = 'none';
            document.getElementById('tooglebtn').style.paddingLeft = '0px';
            a = 0;
        }
        else {
            document.getElementById('sideNav').style.display = 'block';
            a = 1;
        }
    }
    showNestedList = () => {
        if (a === 1) {
            document.getElementById('reports').style.display = 'block';
            a = 0;
        }
        else {
            document.getElementById('reports').style.display = ' none';
            a = 1;
        }
    }
    handleAddService = (event) => {
        event.preventDefault();
        let letters = /^[a-zA-Z]+/;
        let serviceName = document.getElementById('serviceName').value;
        let serviceCategory = document.getElementById('serviceCategory').value;
        let servicePrice = document.getElementById('servicePrice').value;
        if (!letters.test(serviceName)) {
            document.getElementById('serviceName').style.border = '1px solid red';
        }
        else if (serviceCategory === 'Select Service') {
            document.getElementById('serviceCategory').style.border = '1px solid red';
        }
        else if (servicePrice === '') {
            document.getElementById('servicePrice').style.border = '1px solid red';
        }
        else {
            const newService = {
                serviceId: this.state.serviceId,
                serviceName: this.state.serviceName,
                serviceCategory: this.state.serviceCategory,
                servicePrice: this.state.servicePrice
            }
            axios.post('/api/add-new-service', newService)
            .then(res => console.log(res.data));
                console.log(newService)
            this.setState({
                serviceId: '',
                serviceName: '',
                serviceCategory: 'Select Service',
                servicePrice: ''
            })
        }
    }
    searchServiceForm = (event) => {
        event.preventDefault();
        let letters = /^[a-zA-Z]+/;
        let searchServiceName = document.getElementById('searchserviceName').value;
        if (!letters.test(searchServiceName)) {
            document.getElementById('searchserviceName').style.border = '1px solid red';
        }
        else {
            let obj;
            axios.post('/api/search-service', { serviceName: this.state.searchSeviceName })
                .then(response => {
                    this.setState({ services: response.data });
                    console.log(this.state.services);
                    for (let i in this.state.services) {
                        obj = this.state.services[i];
                    };
                    document.getElementById('searchServiceName').innerHTML = obj[0].serviceName;
                    document.getElementById('searchServiceId').innerHTML = obj[0]._id;
                    document.getElementById('searchServiceCategory').innerHTML = obj[0].serviceCategory;
                    document.getElementById('searchServicePrice').innerHTML = obj[0].servicePrice;
                })
                .catch(function (error) {
                    console.log(error);
                })


        }
    }
    viewRecord = (e) =>{
        e.preventDefault();
        if(document.getElementById('searchServiceId') === ""){
            alert("Please Search By a Valid Service Name");
        }
        else{
        window.open('/update-service');
            
        }
    }
    showNestedList = () => {
        if (a === 1) {
            document.getElementById('reports').style.display = 'block';
            a = 0;
        }
        else {
            document.getElementById('reports').style.display = 'none';
            a = 1;
        }
    }
    componentDidMount(){
        // document.getElementById('username').innerHTML = qurryString.parse(window.location.search).User;
    }
    render() {
        return (
            <div id='adminServiceComponent'>
               <Row>
          {/* <Col xs={2} lg={2} id='dashboardSideNav'>
            <div className='toggleBtnDiv'>
              <span id='tooglebtn'>&#9776;</span>

            </div>
            <br />
            <img src={logo} alt='LOGO' /><br /><br />
            <Link to={"/admin-profile?id=" + qurryString.parse(window.location.search).id}><h3 id='username'>User Name</h3></Link>
            <ul>    
            <Link to={"/dashboard-home?id=" + qurryString.parse(window.location.search).id+"&User=" + qurryString.parse(window.location.search).User}><li itle='Home'><i class="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Home</span></li></Link>
                            <Link to={"/mechanic-info?id=" + qurryString.parse(window.location.search).id+ "&User="+qurryString.parse(window.location.search).User}><li title='Mechanics'><i class="fas fa-wrench"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Mechanics</span></li></Link>
                            <Link to={"/prices?id=" + qurryString.parse(window.location.search).id+ "&User=" + qurryString.parse(window.location.search).User}><li title='Services'><i class="fab fa-servicestack"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Service</span></li></Link>
                            <Link to={"/orders?id=" + qurryString.parse(window.location.search).id+ "&User=" + qurryString.parse(window.location.search).User}><li title='Services'><i class="fab fa-servicestack"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Orders</span></li></Link>
                            <Link to={"/customer-detail?id=" + qurryString.parse(window.location.search).id+ "&User=" + qurryString.parse(window.location.search).User}><li title='Users'><i class="fas fa-users"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Customers</span></li></Link>
                            <li title='Users' onClick={this.showNestedList}><i class="fas fa-users"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Reports</span>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-caret-down"></i></li>
                            <ul id='reports'>
                            <Link to={"/mechanic-report?id=" + qurryString.parse(window.location.search).id+ "&User=" + qurryString.parse(window.location.search).User}><li>Mechanic</li></Link>
                            <Link to={"/service-report?id=" + qurryString.parse(window.location.search).id+ "&User=" + qurryString.parse(window.location.search).User}><li>Service</li></Link>
                            <Link to={"/customer-report?id=" + qurryString.parse(window.location.search).id+ "&User=" + qurryString.parse(window.location.search).User}><li>Customer</li></Link>
              </ul>
            </ul>
          </Col> */}
          <Col xs={12} lg={12}>
            {/* <DashboardTobar /><br /><br /> */}<br /><br />
                                <h1>Our Services</h1><br />
                        <Row>
                            <Col xs={12}  lg={{ span: 5}} style={{marginLeft:"5%"}}><br />
                                <Form onSubmit={this.handleSubmit}><br />
                                    <center><h4>Add Service</h4></center>
                                    <br />
                                    <Form.Row>
                                        <Col>
                                            <input type='text' disabled placeholder="Auto Genrated Service ID" id='serviceid' value={this.state.serviceId} onChange={this.handleServiceId} />
                                        </Col>
                                    </Form.Row>
                                    <br/>
                                    <Form.Row>
                                        <Col>
                                            <input type='text' placeholder="Service Name" id='serviceName' value={this.state.serviceName} onChange={this.handleServiceName} />
                                        </Col>
                                    </Form.Row><br />
                                    <Form.Row>
                                        <Col>
                                            <input type='text' placeholder="Service Price" id='servicePrice' value={this.state.servicePrice} onChange={this.handleServicePrice} />
                                        </Col>
                                        <Col>
                                            <select id='serviceCategory' value={this.state.serviceCategory} onChange={this.handleServiceCategory} >
                                                <option selected>Select Service</option>
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
                                    </Form.Row><br />
                                    <input type='file' style={{ backgroundColor: 'transparent' }} /><br />
                                    <Row>
                                        <Col xs={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}>
                                            <br />
                                            <Button type='submit' onClick={this.handleAddService}>Add</Button>
                                            <br /><br /><br />
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                            <hr className='columnRonw' />

                            <Col xs={12} lg={{ span: 5}} style={{marginRight:"5%"}}><br />
                                <Form>
                                    <br/>
                                    <center><h4>Search Service </h4></center><br />
                                    <Form.Row>
                                        <Col>
                                            <input type='text' placeholder="Service Name" id='searchserviceName' value={this.state.searchSeviceName} onChange={this.handlesearchSeviceName} />
                                        </Col>
                                    </Form.Row>
                                    <Row>
                                        <Col xs={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}>
                                            <br /><Button type='submit' onClick={this.searchServiceForm}>Search</Button>
                                        </Col>
                                    </Row><br />
                                    <Table responsive striped bordered>
                                        <thead>
                                            <tr>
                                                <th>Service Name</th>
                                                <td id='searchServiceName'></td>
                                            </tr>
                                            <tr>
                                                <th>Service ID</th>
                                                <td id='searchServiceId'></td>
                                            </tr>
                                            <tr>
                                                <th>Service Category</th>
                                                <td id='searchServiceCategory'></td>
                                            </tr>
                                            <tr>
                                                <th>Price</th>
                                                <td id='searchServicePrice'></td>
                                            </tr>
                                        </thead>
                                        <br /><br/>

                                        <Row>
                                            <Col xs={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 7 }}>
                                                <Link to='/update-service'><Button  type='submit' onClick={this.viewRecord}>Update</Button></Link>
                                            </Col>
                                        </Row>
                                    </Table>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
        </Row>
            </div>
        );
    }
}
export default OurServices;