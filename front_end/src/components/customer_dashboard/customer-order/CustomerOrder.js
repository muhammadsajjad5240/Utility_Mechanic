import React, { Component } from 'react';
import axios from 'axios';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import { Row, Col, Button, Form} from 'react-bootstrap';
import './CustomerOrder.css';
import MyCustomToolbarSelect from './Bookedordertoolbar';
import MyCustomToolbarSelect2 from './CompleteOrdeTollBar';
const qurryString = require("query-string");
let obj;
let my;
class CustomerOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: [],
            completeOrder:[],
            UserName: '',
            fullName: '',
            phone: '',
            address: '',
            service: '',
            category: 'Select Category',
            DateAndTime: '',
            Rowindex: 0
        }
    }
    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }// convert image binery to string
    componentDidMount() {
        document.getElementById('CategoryServicses').style.display = 'none';
        this.setState({ Rowindex: 0 })
        axios.post('/Customer/get-coustomer-orders', { Username: qurryString.parse(window.location.search).User })
            .then(response => {
                this.setState({ order: response.data });
                // console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
            //
            axios.post('/Customer/get-complete-orders', { Username: qurryString.parse(window.location.search).User })
            .then(response => {
                this.setState({ completeOrder: response.data });
                // console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }//componentdidmount funcation end
    handlefullName = (e) => {
        document.getElementById('btnorderbooking').disabled =false;
        this.setState({ fullName: e.target.value });

    }
    handlephone = (e) => {
        document.getElementById('btnorderbooking').disabled =false;
        this.setState({ phone: e.target.value });
    }
    handleAddress = (e) => {
        document.getElementById('btnorderbooking').disabled =false;
        this.setState({ address: e.target.value });
    }
    handleService = (e) => {
        document.getElementById('btnorderbooking').disabled =false;
        this.setState({ service: e.target.value });
    }
    handleRequire = (e) => {
        document.getElementById('btnorderbooking').disabled =false;
        this.setState({ require: e.target.value });
    }
    handlecategory = (e) => {
        document.getElementById('btnorderbooking').disabled =false;
        document.getElementById('CategoryServicses').style.display= 'block'
        document.getElementById('CategoryServicses').innerHTML = <option>Select-Services</option>
        console.log(e.target.value);
        this.setState({ category: e.target.value });
        axios.post("/Admin/get-machanic-by-Active", {
            category: e.target.value,
            Active: true
        })
            .then(responce => {
                this.setState({ data: responce.data })
                for (let i in this.state.data) {
                    obj = this.state.data[i];
                };
                let myselect = document.getElementById('CategoryServicses');
                let i = 0, j = 0, innertext = '';
                let servicescheck = [];
                obj.map(option => {

                    servicescheck[i] = option.sevices;
                    i++;
                })
                servicescheck = this.uniq(servicescheck)


                servicescheck.map(option => {
                    let mytag = document.createElement('option');
                    innertext = document.createTextNode(option)
                    mytag.appendChild(innertext);
                    myselect.insertBefore(mytag, myselect.lastChild);
                })

                console.log(servicescheck)
            })//then end here 
            .catch(error => { console.log(error) });
    }
    uniq = (a) => {
        var prims = { "boolean": {}, "number": {}, "string": {} }, objs = [];

        return a.filter(function (item) {
            var type = typeof item;
            if (type in prims)
                return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
            else
                return objs.indexOf(item) >= 0 ? false : objs.push(item);
        });
    } // filter funcation for strings

    myfocus = (a) => {
        // alert(a)
        document.getElementById(a).style.border = "1px solid #CED4DA";
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let field = document.getElementById('fullName').value;
        document.getElementById('btnorderbooking').disabled =true;

        let phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
        let letters = /^[a-zA-Z]+/;
        let check = true;
        if (check) {
            if (!letters.test(field)) {
                document.getElementById('fullName').style.border = '1px solid red';
                check = false;
            }
            field = document.getElementById('phone').value;
            if (!phoneRGEX.test(field)) {
                document.getElementById('phone').style.border = '1px solid red';
                check = false;
            }
            field = document.getElementById('address').value;
            if (field.length === 0) {
                document.getElementById('address').style.border = '1px solid red';
                check = false;
            }
            field = document.getElementById('category').value
            if (field === 'Select Category') {
                document.getElementById('category').style.border = '1px solid red';
                check = false;
            }
            if (document.getElementById('CategoryServicses').value === ''||document.getElementById('CategoryServicses').value === 'Select Service') {
                document.getElementById('CategoryServicses').style.border = '1px solid red';
                check = false;
            }

        }
        if (check) {

            let today = new Date();
            let val = Math.floor(1000 + Math.random() * 9000);
            axios.post('/Customer/order-booking',
                {
                    UserName: qurryString.parse(window.location.search).User,
                    fullName: this.state.fullName,
                    phone: this.state.phone,
                    address: this.state.address,
                    category: this.state.category,
                    service: document.getElementById('CategoryServicses').value,
                    DateAndTime: today.getHours() + ":" + today.getMinutes() + " /" + today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear(),
                    Code: val

                })
                .then(responce => {
                    console.log(responce.data);
                    let a = responce.statusText;
                    if (a === 'OK') {
                        alert('order Book')
                        axios.post('/Customer/get-coustomer-orders', { Username: qurryString.parse(window.location.search).User })
                            .then(response => {
                                this.setState({ order: response.data });
                                console.log(responce.data)

                                this.setState({
                                    fullName: '',
                                    phone: '',
                                    address: '',
                                    service: '',
                                    time: '',
                                    category: 'Select Category',
                                    service: 'Select Service'
                                })
                                document.getElementById('CategoryServicses').style.display = 'none';
                            })
                            .catch(error => {
                                console.log(error);
                            });
                    }

                })
                .catch(error => { alert("Order alread booked") })
        }
    }
    getMuiTheme = () =>
        createMuiTheme({
            overrides: {
                MUIDataTable: {
                    responsiveScroll: { maxWidth: "100%" },
                    root: {
                        // backgroundColor: "#FF000",
                    },
                    paper: {
                        boxShadow: "none"
                    }
                },
                MUIDataTableBodyCell: {
                    root: {
                        fontSize: '0.8em',
                        // backgroundColor: "#FF0000"
                    }
                }
            }
        });
    render() {
        const columns = ["UserName", "Full Name", "Phone", "Address", "Service", "Category", "Time/Date", "Status", "Mechanic", 'Confirm'];
        const options = {
            filter: false,
            responsive: "scroll",
            rowsPerPage: 5,
            rowsPerPageOptions: [5, 10, 15, 25, 100],
            selectableRows: 'single',
            selectableRowsOnClick: true,
            customToolbarSelect: (selectedRows, rowsdata) => (
                <MyCustomToolbarSelect
                    selectedRows={selectedRows}
                    Data={rowsdata}
                />
            ),

        };
        const options2 = {
            filter: false,
            responsive: "scroll",
            rowsPerPage: 5,
            rowsPerPageOptions: [5, 10, 15, 25, 100],
            selectableRows: 'single',
            selectableRowsOnClick: true,
            customToolbarSelect: (selectedRows, rowsdata) => (
                <MyCustomToolbarSelect2
                    selectedRows={selectedRows}
                    Data={rowsdata}
                />
            ),

        };
        return (
            <div id='customer-order'>
                <Col xs={12} lg={12} ><br /><br />
                    <Row>
                        <Col xs={12} lg={{ span: 6, offset: 3 }}>
                            <Form>
                                <h2>Order Booking</h2><br />
                                <Form.Row>
                                    <Col>
                                        <input type='text' placeholder="Full Name" onFocus={() => this.myfocus('fullName')} id='fullName' value={this.state.fullName} onChange={this.handlefullName} />
                                    </Col>
                                    <Col>
                                        <input type='phone' placeholder="Phone" onFocus={() => this.myfocus('phone')} id='phone' value={this.state.phone} onChange={this.handlephone} />
                                    </Col>
                                </Form.Row><br />
                                <Form.Row>
                                    <Col>
                                        <input type='text' placeholder="Address" onFocus={() => this.myfocus('address')} id='address' value={this.state.address} onChange={this.handleAddress} />
                                    </Col>

                                </Form.Row><br />
                                <Form.Row>
                                    <Col>
                                        <select id='category' onFocus={() => this.myfocus('category')} value={this.state.category} onChange={this.handlecategory} >
                                            <option disabled selected>Select Category</option>
                                            <option>Electrician</option>
                                            <option>Home Cleaning</option>
                                            <option>Plumber</option>
                                            <option>Car Painter</option>
                                            <option>Painter</option>
                                            <option>Mazdoor</option>
                                            <option>HVAC, A/C Service & Gas Refilling</option>
                                        </select>
                                    </Col>
                                    <Col>
                                        <select id='CategoryServicses' onFocus={() => this.myfocus('CategoryServicses')} className='service' value={this.state.service} onChange={this.handleService} >
                                            <option disabled selected>Select Service</option>
                                        </select>

                                    </Col>
                                </Form.Row>
                                <br />
                                <Row>
                                    <Col xs={{ span: 6, offset: 6 }} lg={{ span: 4, offset: 4 }}>
                                        <Button type='submit' id='btnorderbooking' onClick={this.handleSubmit} className='customer-order-btn' >order</Button>
                                    </Col>
                                </Row>
                                <br />

                            </Form>
                        </Col>
                    </Row><br /><br />
                    <Row>
                        <Col xs={12} lg={{ span: 12, offset: 0 }}>

                            <MuiThemeProvider theme={this.getMuiTheme()}>

                                <MUIDataTable

                                    title={"Booked Orders"}
                                    data={this.state.order.map(record => {
                                        return [
                                            // record._id,
                                            record.UserName,
                                            record.fullName,
                                            record.phone,
                                            record.address,
                                            record.service,
                                            record.category,
                                            record.DateAndTime,
                                            record.Status,
                                            record.Mechanic,
                                            record.Confirm,

                                        ]
                                    })}
                                    columns={columns}
                                    options={options}
                                />
                            </MuiThemeProvider>
                        </Col>
                    </Row><br /><br />
                    {/* <------------------------------------------------------------------------------------------------> */}
                    <Row>
                        <Col xs={12} lg={{ span: 12, offset: 0 }}>
                            {/* <h3 className='electrical-price-heading'>Completed Oreders</h3> */}
                            <MuiThemeProvider theme={this.getMuiTheme()}>

                                <MUIDataTable

                                    title={"Complete Orders"}
                                    data={this.state.completeOrder.map(record => {
                                        return [
                                            record.UserName,
                                            record.fullName,
                                            record.phone,
                                            record.address,
                                            record.service,
                                            record.category,
                                            record.DateAndTime,
                                            record.Status,
                                            record.Mechanic,
                                            record.Confirm,
                                        ]
                                    })}
                                    columns={columns}
                                    options={options2}
                                />
                            </MuiThemeProvider><br />
                        </Col>
                    </Row><br /><br /><br /><br /><br /><br /><br /><br />

                </Col>
                {/* </Row> */}

            </div>
        );
    }
}
export default CustomerOrder;