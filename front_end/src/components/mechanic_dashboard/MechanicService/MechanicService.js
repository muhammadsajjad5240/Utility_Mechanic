import React, { Component } from 'react';
import { Row, Col, Container, Button, Form, Table } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MechanicService.css';
let a = 1;
class UserService extends Component {
    constructor(props) {
        super(props);
        this.state={
            mechanicService:[]
        }
    }
    closeSideNav = () => {
        if (a === 1) {
            document.getElementById('sideNav').style.display = 'none';
            a = 0;
        }
        else {
            document.getElementById('sideNav').style.display = 'block';
            a = 1;
        }
    }
    componentDidMount = () => {
        axios.get('/api/mechanic-services')
            .then(response => {
                this.setState({ mechanicService: response.data });
                console.log(this.state.mechanicService)
    })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        return (
            <div id='mechanicServices'>
                <Row>
                    <Col xs={2} lg={2}>
                        {/* <DashboardSideNav /> */}
                    </Col>
                    <Col xs={10} lg={10}><br /><br />
                                <h1>Mechanic Services</h1>
                        <br />
                                <Table responsive striped bordered>
                                    <thead>
                                        <tr>
                                            <th>Service ID</th>
                                            <th>Service Name</th>
                                            <th>Service Category</th>
                                            <th>Service Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.mechanicService.map(services=>
                                        <tr>
                                            <td>{services.serviceid}</td>
                                            <td>{services.servicename}</td>
                                            <td>{services.serviceCategory}</td>
                                            <td>{services.serviceprice}</td>
                                        </tr>
                                        )}
                                    </tbody>
                                </Table>
                        <br /><br /><br /><br />
                    </Col>
                </Row>
            </div>
        );
    }
}
export default UserService;