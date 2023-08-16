import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Table, Form } from 'react-bootstrap';
import './mechanicinfo.css';
const qurryString = require("query-string");
let obj = null;
class MechanicInfo extends Component {
    constructor(props) {
        super(props);
        this.handleFullName = this.handleFullName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
        this.handleService = this.handleService.bind(this);
        this.state = {
            MechanicDetails: [],
            searchByCategory: [],
            mechanic: [],
            data: [],
            fullName: '',
            email: '',
            userName: '',
            password: '',
            phone: '',
            address: '',
            status: 'Select Status',
            service: 'Ceiling fan installation',
            category: 'Electrician',
            searchUserName: '',
            searchCategory: 'Select Service',
            Rowindex: 0
        }
    }
    handleFullName = (e) => {
        document.getElementById('btnmechanicregister').disabled = false;
        this.setState({ fullName: e.target.value });
        let field = document.getElementById('name').value;
        let letters = /^[a-zA-Z ]+$/;
        if (!letters.test(field) || field < 4) {
            document.getElementById('name').style.border = "1px solid red";
        }
        else {
            document.getElementById('name').style.border = "1px solid #CED4DA";
        }
    }
    handleSearchUserName = (e) => {
        document.getElementById('btnmechanicregister').disabled = false;
        this.setState({ searchUserName: e.target.value })
        let field = document.getElementById('searchUserName').value;

        let letters = /^[a-zA-Z ]+/;
        if (!letters.test(field)) {
            document.getElementById('searchUserName').style.border = "1px solid red";
        }
        else {
            document.getElementById('searchUserName').style.border = "1px solid #CED4DA";
        }
    }
    handleSearchCategory = (e) => {

        this.setState({ searchCategory: e.target.value })
    }
    handleEmail = (e) => {
        document.getElementById('btnmechanicregister').disabled = false;
        this.setState({ email: e.target.value });
        let field = document.getElementById('email').value;
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field)) {
            document.getElementById('email').style.border = '1px solid red';
        }
        else {
            document.getElementById('email').style.border = "1px solid #CED4DA";
        }
    }
    handleUserName = (e) => {
        document.getElementById('btnmechanicregister').disabled = false;
        this.setState({ userName: e.target.value });
        let field = document.getElementById('userName').value;

        let letters = /^[a-z0-9]+$/i;
        if (!letters.test(field) || field.length < 4) {
            document.getElementById('userName').style.border = "1px solid red";
        }
        else {
            document.getElementById('userName').style.border = "1px solid #CED4DA";
        }
    }
    handlePassword = (e) => {
        document.getElementById('btnmechanicregister').disabled = false;
        this.setState({ password: e.target.value });
        let field = document.getElementById('pwd').value;

        let letters = /^[a-zA-Z0-9 ]+$/i;
        if (!letters.test(field) || field.length < 9) {
            document.getElementById('pwd').style.border = "1px solid red";
        }
        else {
            document.getElementById('pwd').style.border = "1px solid #CED4DA";
        }
    }
    handlePhone = (e) => {
        document.getElementById('btnmechanicregister').disabled = false;
        this.setState({ phone: e.target.value });
        let field = document.getElementById('phone').value;
        let letters = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
        if (!letters.test(field)) {
            document.getElementById('phone').style.border = "1px solid red";
        }
        else {
            document.getElementById('phone').style.border = "1px solid #CED4DA";
        }
    }
    handleAddress = (e) => {
        document.getElementById('btnmechanicregister').disabled = false;
        this.setState({ address: e.target.value });
        let field = document.getElementById('address').value;

        let letters = /^[a-z0-9]+/i;;
        if (!letters.test(field)) {
            document.getElementById('address').style.border = "1px solid red";
        }
        else {
            document.getElementById('address').style.border = "1px solid #CED4DA";
        }
    }
    handleStatus = (e) => {
        document.getElementById('btnmechanicregister').disabled = false;
        this.setState({ status: e.target.value });
        if (e.target.value === 'Mechanic') {
            document.getElementById('category').style.display = 'block';
            document.getElementById('elecService').style.display = 'block';
        }
        else {
            document.getElementById('category').style.display = 'none';
            document.getElementById('elecService').style.display = 'none';
            document.getElementById('plumberService').style.display = 'none';
            document.getElementById('homeCleaningService').style.display = 'none';
            document.getElementById('hvacService').style.display = 'none';
            document.getElementById('painterService').style.display = 'none';
            document.getElementById('mazdoorService').style.display = 'none';
            document.getElementById('carPainterService').style.display = 'none';
        }
    }
    handleService = (e) => {
        document.getElementById('btnmechanicregister').disabled = false;
        this.setState({ service: e.target.value });
    }
    handlecategory = (e) => {
        document.getElementById('btnmechanicregister').disabled = false;
        this.setState({ category: e.target.value });
        if (e.target.value === 'Electrician') {
            document.getElementById('elecService').style.display = 'block';
            document.getElementById('plumberService').style.display = 'none';
            document.getElementById('homeCleaningService').style.display = 'none';
            document.getElementById('hvacService').style.display = 'none';
            document.getElementById('painterService').style.display = 'none';
            document.getElementById('mazdoorService').style.display = 'none';
            document.getElementById('carPainterService').style.display = 'none';
        }
        if (document.getElementById('category').value === 'Home Cleaning') {
            document.getElementById('homeCleaningService').style.display = 'block';
            document.getElementById('elecService').style.display = 'none';
            document.getElementById('plumberService').style.display = 'none';
            document.getElementById('hvacService').style.display = 'none';
            document.getElementById('painterService').style.display = 'none';
            document.getElementById('mazdoorService').style.display = 'none';
            document.getElementById('carPainterService').style.display = 'none';
        }
        if (document.getElementById('category').value === 'Plumber') {
            document.getElementById('plumberService').style.display = 'block';
            document.getElementById('elecService').style.display = 'none';
            document.getElementById('homeCleaningService').style.display = 'none';
            document.getElementById('hvacService').style.display = 'none';
            document.getElementById('painterService').style.display = 'none';
            document.getElementById('mazdoorService').style.display = 'none';
            document.getElementById('carPainterService').style.display = 'none';
        }
        if (document.getElementById('category').value === 'Car Painter') {
            document.getElementById('carPainterService').style.display = 'block';
            document.getElementById('elecService').style.display = 'none';
            document.getElementById('plumberService').style.display = 'none';
            document.getElementById('homeCleaningService').style.display = 'none';
            document.getElementById('hvacService').style.display = 'none';
            document.getElementById('painterService').style.display = 'none';
            document.getElementById('mazdoorService').style.display = 'none';
        }
        if (document.getElementById('category').value === 'Painter') {
            document.getElementById('painterService').style.display = 'block';
            document.getElementById('elecService').style.display = 'none';
            document.getElementById('plumberService').style.display = 'none';
            document.getElementById('homeCleaningService').style.display = 'none';
            document.getElementById('hvacService').style.display = 'none';
            document.getElementById('mazdoorService').style.display = 'none';
            document.getElementById('carPainterService').style.display = 'none';
        }
        if (document.getElementById('category').value === 'Mazdoor') {
            document.getElementById('mazdoorService').style.display = 'block';
            document.getElementById('elecService').style.display = 'none';
            document.getElementById('plumberService').style.display = 'none';
            document.getElementById('homeCleaningService').style.display = 'none';
            document.getElementById('hvacService').style.display = 'none';
            document.getElementById('painterService').style.display = 'none';
            document.getElementById('carPainterService').style.display = 'none';
        }

        if (document.getElementById('category').value === 'HVAC, A/C Service & Gas Refilling') {
            document.getElementById('hvacService').style.display = 'block';
            document.getElementById('elecService').style.display = 'none';
            document.getElementById('plumberService').style.display = 'none';
            document.getElementById('homeCleaningService').style.display = 'none';
            document.getElementById('painterService').style.display = 'none';
            document.getElementById('mazdoorService').style.display = 'none';
            document.getElementById('carPainterService').style.display = 'none';
        }
    }
    //<----------------------------------------------------------------------------------------------------------->
    handlemachanics = (event) => {
        document.getElementById('btnmechanicregister').disabled = true;
        event.preventDefault();
        let check = true;
        if (check) {
            let field = document.getElementById('name').value;

            let letters = /^[a-zA-Z ]+/;
            if (!letters.test(field)) {
                document.getElementById('name').style.border = "1px solid red";
                check = false;
            }

            field = document.getElementById('email').value;
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field)) {

                document.getElementById('email').style.border = '1px solid red';
                check = false;
            }
            field = document.getElementById('userName').value;
            letters = /^[a-z0-9]+$/i;
            if (!letters.test(field)) {
                document.getElementById('userName').style.border = "1px solid red";
                check = false;
            }
            field = document.getElementById('pwd').value;
            if (field.length === 0) {
                document.getElementById('pwd').style.border = "1px solid red";
                check = false;
            }
            field = document.getElementById('phone').value;
            letters = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
            if (!letters.test(field)) {
                document.getElementById('phone').style.border = "1px solid red";
                check = false;
            }
            field = document.getElementById('address').value;
            letters = /^[a-z0-9]+/i;
            if (!letters.test(field)) {
                document.getElementById('address').style.border = '1px solid red';
                check = false;
            }
            if (document.getElementById('status').value === 'Select Status') {
                document.getElementById('status').style.border = '1px solid red';
                check = false;
            }
        }//here the validation check is end 
        if (check) {
            
            axios.post("/Signups/customerusernameCheck", {
                Email: this.state.userName
            })
                .then(responce => {
                    console.log(responce.data);
                    this.setState(this.state.data = responce.data)
                    console.log(this.state.data);

                    for (let i in this.state.data) {
                        obj = this.state.data[i];
                    }
                    if (obj === null) {
                        axios.post("/Signups/mechanicusernameCheck", {
                            Email: this.state.username
                        })
                            .then(responce => {//console.log(responce.data);
                                this.setState(this.state.data = responce.data)
                                //console.log(this.state.data);

                                for (let i in this.state.data) {
                                    obj = this.state.data[i];
                                }
                                if (obj === null) {

                                    axios.post("/Signups/adminusernameCheck", {
                                        Email: this.state.username
                                    })
                                        .then(responce => {//console.log(responce.data);
                                            this.setState(this.state.data = responce.data)
                                            //console.log(this.state.data);

                                            for (let i in this.state.data) {
                                                obj = this.state.data[i];
                                            }
                                            if (obj === null) {
                                                if (document.getElementById('status').value === 'Mechanic') {
                                                    axios.post("/Signups/Machanics", {
                                                        Name: this.state.fullName,
                                                        Email: this.state.email,
                                                        UserName: this.state.userName,
                                                        Password: this.state.password,
                                                        Phone: this.state.phone,
                                                        Address: this.state.address,
                                                        status: this.state.status,
                                                        Category: this.state.category,
                                                        sevices: this.state.service
                                                    })
                                                        .then(responce => {
                                                            console.log(responce.data)

                                                            if (responce.data.success === true) {
                                                                alert("Register Machnics");
                                                                this.setState({
                                                                    fullName: '',
                                                                    email: '',
                                                                    userName: '',
                                                                    password: '',
                                                                    phone: '',
                                                                    address: '',
                                                                    status: 'Select Status',
                                                                })
                                                                document.getElementById('category').style.display = 'none';
                                                                document.getElementById('elecService').style.display = 'none';
                                                                document.getElementById('plumberService').style.display = 'none';
                                                                document.getElementById('homeCleaningService').style.display = 'none';
                                                                document.getElementById('hvacService').style.display = 'none';
                                                                document.getElementById('painterService').style.display = 'none';
                                                                document.getElementById('mazdoorService').style.display = 'none';
                                                                document.getElementById('carPainterService').style.display = 'none';
                                                                document.getElementById('name').select();
                                                            }
                                                            else if (responce.data.success === 1) {
                                                                alert("Chose A different Username");
                                                                document.getElementById('name').select();
                                                            }
                                                        })
                                                        .catch(error => { alert(error) })
                                                }//condition on mechanic or maneger
                                                else {
                                                    axios.post("/Signups//AdminSignup", {
                                                        Name: this.state.fullName,
                                                        Email: this.state.email,
                                                        UserName: this.state.userName,
                                                        Password: this.state.password,
                                                        Phone: this.state.phone,
                                                        Address: this.state.address,
                                                        // status: this.state.status,
                                                        // sevices: this.state.service
                                                    })
                                                        .then(responce => {
                                                            let a = responce.statusText;
                                                            if (a === 'OK') {
                                                                alert("Manager Register");
                                                                this.setState({
                                                                    fullName: '',
                                                                    email: '',
                                                                    userName: '',
                                                                    password: '',
                                                                    phone: '',
                                                                    address: '',
                                                                    status: 'Select Status',
                                                                })
                                                                document.getElementById('name').select();
                                                            }
                                                        })
                                                        .catch(error => { alert(error) })
                                                }//manager register 
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
    }//data send to data base 

    searchRecordForm = (event) => {
        event.preventDefault();
        let letters = /^[a-zA-Z]+/;
        let SearchUserName = document.getElementById('searchUserName').value;
        if (!letters.test(SearchUserName)) {
            document.getElementById('searchUserName').style.border = "1px solid red";
        }
        else {
            let obj = null;
            axios.post('/Admin/search-mechanics-detail', { userName: this.state.searchUserName })
                .then(response => {
                    this.setState({ MechanicDetails: response.data });
                    console.log(this.state.MechanicDetails);
                    for (let i in this.state.MechanicDetails) {
                        obj = this.state.MechanicDetails[i];
                    };

                    document.getElementById('mechanicName').innerHTML = obj[0].Name;
                    document.getElementById('mechanicEmail').innerHTML = obj[0].Email;
                    document.getElementById('mechanicUserName').innerHTML = obj[0].UserName;
                    document.getElementById('mechanicPassword').innerHTML = obj[0].Password;
                    document.getElementById('mechanicPhone').innerHTML = obj[0].Phone;
                    document.getElementById('mechanicAddress').innerHTML = obj[0].Address;
                    document.getElementById('mechanicStatus').innerHTML = obj[0].status;
                    document.getElementById('mechanicService').innerHTML = obj[0].sevices;
                    document.getElementById('btnupdate').disabled = false;

                })
                .catch(function (error) {
                    alert("Machanic dose not find")
                    document.getElementById('searchUserName').select();
                    console.log(error);
                })
        }
    }
    searchByCategory = (e) => {
        // e.preventDefault();
        if (document.getElementById('searchCategory1').value === 'Select Category') {
            document.getElementById('searchCategory1').style.border = '1px solid red';
        }
        else {

            axios.post('/Admin/search-mechanics-by-category ', { category: this.state.searchCategory })
                .then(response => {
                    this.setState({ searchByCategory: response.data });
                    console.log(this.state.searchByCategory.length);
                    if (this.state.searchByCategory.length === 0) {
                        alert("No Record Available")

                    }

                })
                .catch(function (error) {
                    alert("for error report check console");
                    console.log(error);
                })
        }
    }
    componentDidMount() {
        this.setState({ Rowindex: 0 })
        document.getElementById('elecService').style.display = 'none';
        document.getElementById('plumberService').style.display = 'none';
        document.getElementById('homeCleaningService').style.display = 'none';
        document.getElementById('hvacService').style.display = 'none';
        document.getElementById('painterService').style.display = 'none';
        document.getElementById('mazdoorService').style.display = 'none';
        document.getElementById('carPainterService').style.display = 'none';
        document.getElementById('category').style.display = 'none';
    }
    deleteRecord = (event) => {
        // alert(event.target)

        // console.log(event.target.id);

        let a = document.getElementById('Rw' + event.target.id)

        // console.log(a.getElementsByTagName('td'))

        a = a.getElementsByTagName('td')
        // console.log(a[2].innerText);
        // console.log(a[4].innerText);
        axios.post('/Admin/delete-Mechanic', { UserName: a[3].innerText })
            .then(responce => {
                console.log(responce.data);
                let a = responce.statusText;
                if (a === 'OK') {
                    axios.post("/Profile/delete-Profile", { Id: a[0].innerText })
                        .then(responce => {
                            console.log(responce.data)
                            axios.post('/Admin/search-mechanics-by-category ', { category: this.state.searchCategory })
                                .then(response => {
                                    this.setState({ searchByCategory: response.data });
                                    console.log(this.state.searchByCategory.length);
                                })
                                .catch(function (error) {
                                    alert("for error report check console");
                                    console.log(error);
                                })//state set
                        })//delete prifile image route then end


                }

            })
            .catch(error => { alert(error) })

    }
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
    myfocus = (a) => {

        document.getElementById(a).style.border = "1px solid #CED4DA";
        //   if(a==='status')
        //   if(document.getElementById(a).value==='Manager')
        //   document.getElementById('service').style.display='none';
        //   if(document.getElementById(a).value==='')
        //   document.getElementById('Mechanic').style.display='block';
    }
    render() {
        return (
            <div id='mechanicInfo'>
                <Row>

                    <Col xs={12} lg={12}>

                        <Row>
                            <Col xs={12} lg={12}><br /><br />
                                <h1>Mechanics & Management</h1><br />
                                <Row>
                                    <Col style={{ marginLeft: "5%" }} xs={12} lg={{ span: 5 }}><br />
                                        <Form onSubmit={this.handleSubmit}>
                                            <center><h4>Create Account</h4></center><br />
                                            <Form.Row>
                                                <Col>
                                                    <input type='text' placeholder="Full Name" id='name' onFocus={() => this.myfocus("name")} value={this.state.fullName} onChange={this.handleFullName} />
                                                </Col>
                                                <Col>
                                                    <input type='email' placeholder="Email" id='email' onFocus={() => this.myfocus('email')} value={this.state.email} onChange={this.handleEmail} />
                                                </Col>
                                            </Form.Row><br /><br />
                                            <Form.Row>
                                                <Col>
                                                    <input type='text' placeholder="User Name" id='userName' onFocus={() => this.myfocus("userName")} value={this.state.userName} onChange={this.handleUserName} />
                                                </Col>
                                                <Col>
                                                    <input type='password' maxLength='15' placeholder="Password" id='pwd' onFocus={() => this.myfocus("pwd")} value={this.state.password} onChange={this.handlePassword} />
                                                    <span title='Show Password' toggle="#password-field" class="fa fa-fw fa-eye mechaniSignUpfield-icon toggle-password" onClick={this.showPassword}></span>
                                                </Col>
                                            </Form.Row><br /><br />
                                            <Form.Row>
                                                <Col>
                                                    <input type='text' placeholder="Mobile No" id='phone' onFocus={() => this.myfocus("phone")} value={this.state.phone} onChange={this.handlePhone} />
                                                </Col>
                                                <Col>
                                                    <input type='text' placeholder="Address" id='address' onFocus={() => this.myfocus("address")} value={this.state.address} onChange={this.handleAddress} />
                                                </Col>
                                            </Form.Row><br /><br />
                                            <Form.Row>
                                                <Col>
                                                    <select id='status' value={this.state.status} onFocus={() => this.myfocus("status")} onChange={this.handleStatus} >
                                                        <option disabled selected>Select Status</option>
                                                        <option >Mechanic</option>
                                                        <option >Manager</option>
                                                    </select>
                                                </Col>
                                                <Col>
                                                    <select id='category' onFocus={() => this.myfocus("category")} value={this.state.category} onChange={this.handlecategory} >
                                                        {/* <option disabled selected>Select Category</option> */}
                                                        <option>Electrician</option>
                                                        <option>Home Cleaning</option>
                                                        <option>Plumber</option>
                                                        <option>Car Painter</option>
                                                        <option>Painter</option>
                                                        <option>Mazdoor</option>
                                                        <option>HVAC, A/C Service & Gas Refilling</option>
                                                    </select>
                                                </Col>
                                            </Form.Row><br />
                                            <Form.Row>
                                                <Col>
                                                    <select id='elecService' className='service' value={this.state.service} onChange={this.handleService} >
                                                        {/* <option disabled selected>Select Service</option> */}
                                                        <option>Ceiling fan installation</option>
                                                        <option>Exhaust fan installation</option>
                                                        <option>Generator installation, service, repair</option>
                                                        <option>Holiday lighting</option>
                                                        <option>Kitchen lighting and range installation</option>
                                                        <option>Lamp post wiring</option>
                                                        <option>Lighting controls</option>
                                                        <option>Motion Sensors</option>
                                                        <option>Underground wiring</option>
                                                        <option>Wiring upgrades</option>
                                                    </select>
                                                    <select id='plumberService' value={this.state.service} onChange={this.handleService} >
                                                        {/* <option disabled selected>Select Service</option> */}
                                                        <option>Kitchen Sinks</option>
                                                        <option>Toilets</option>
                                                        <option>Showers</option>
                                                        <option>Tubs</option>
                                                        <option>Washer (laundry)</option>
                                                        <option>Garbage Disposal</option>
                                                        <option>Drain Pipes</option>
                                                        <option>Tankless Hot Water Heaters</option>
                                                        <option>Floor Drains</option>
                                                        <option>Pipe Repair</option>
                                                        <option>Grease Traps</option>
                                                    </select>
                                                    <select id='homeCleaningService' value={this.state.service} onChange={this.handleService} >
                                                        {/* <option disabled selected>Select Service</option> */}
                                                        <option>Cleaning of Rooms and General Area </option>
                                                        <option>Cleaning of Kitchens	</option>
                                                        <option>Cleaning of Bathrooms	</option>
                                                        <option>Marble & Tile Chemical Floor Polish</option>
                                                    </select>
                                                    <select id='hvacService' value={this.state.service} onChange={this.handleService} >
                                                        {/* <option disabled selected>Select Service</option> */}
                                                        <option>Gas Refilling-Fridge/Refrigerator/Deep Freezer</option>
                                                        <option>Gas Refilling for Regular AC</option>
                                                        <option>HVAC, Central Cooling System</option>
                                                        <option>PCB card repairing </option>
                                                        <option>Commercial Chiller Service</option>
                                                        <option>Window AC Service</option>
                                                    </select>
                                                    <select id='painterService' value={this.state.service} onChange={this.handleService} >
                                                        {/* <option disabled selected>Select Service</option> */}
                                                        <option>Paint (Interior Repaint)</option>
                                                        <option>Paint (Exterior Repaint) </option>
                                                        <option>Paint (New) </option>
                                                        <option>Polishing</option>
                                                    </select>
                                                    <select id='mazdoorService' value={this.state.service} onChange={this.handleService} >
                                                        {/* <option disabled selected>Select Service</option> */}
                                                        <option>Tile Fitting</option>
                                                        <option>Shuttring </option>
                                                        <option>Roof lentar steel work </option>
                                                        <option>Architecture</option>
                                                    </select>
                                                    <select id='carPainterService' value={this.state.service} onChange={this.handleService} >
                                                        {/* <option disabled selected>Select Service</option> */}
                                                        <option>Doors & Windows</option>
                                                        <option>Furniture Polish</option>
                                                        <option>Furniture Repair</option>
                                                    </select>
                                                </Col>
                                            </Form.Row>
                                            <br /><br />
                                            <Row>
                                                <Col xs={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}>
                                                    <Button type='submit' id='btnmechanicregister' onClick={this.handlemachanics}>Register</Button>
                                                </Col>
                                                <br /><br /><br /><br /><br />
                                            </Row>
                                        </Form>
                                    </Col>
                                    <hr className='mechanichr' />
                                    <Col style={{ marginRight: "5%" }} xs={12} lg={{ span: 5 }} ><br />
                                        <Form>
                                            <center><h4>Search Mechanic </h4></center><br />
                                            <Form.Row>
                                                <Col>
                                                    <input type='text' placeholder="User Name" id='searchUserName' onFocus={() => this.myfocus("searchUserName")} value={this.state.searchUserName} onChange={this.handleSearchUserName} />
                                                </Col>
                                                <Col>
                                                    <Button type='submit' onClick={this.searchRecordForm}>Search</Button>
                                                </Col>
                                            </Form.Row><br />
                                            <Row>
                                                <Col lg={12}>
                                                    <Table responsive striped bordered>
                                                        <thead>
                                                            <tr>
                                                                <th>Mechanic Name</th>
                                                                <td id='mechanicName'></td>
                                                            </tr>
                                                            <tr>
                                                                <th>Email</th>
                                                                <td id='mechanicEmail'></td>
                                                            </tr>
                                                            <tr>
                                                                <th>User Name</th>
                                                                <td id='mechanicUserName'></td>
                                                            </tr>
                                                            <tr>
                                                                <th>Password</th>
                                                                <td id='mechanicPassword'></td>
                                                            </tr>
                                                            <tr>
                                                                <th>Phone No</th>
                                                                <td id='mechanicPhone'></td>
                                                            </tr>
                                                            <tr>
                                                                <th>Address</th>
                                                                <td id='mechanicAddress'></td>
                                                            </tr>
                                                            <tr>
                                                                <th>Status</th>
                                                                <td id='mechanicStatus'></td>
                                                            </tr>
                                                            <tr>
                                                                <th>Service</th>
                                                                <td id='mechanicService'></td>
                                                            </tr>
                                                        </thead>
                                                    </Table>
                                                    <Row>
                                                        <Col xs={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}>

                                                            <Link to={"/mechanic-update?id=" + qurryString.parse(window.location.search).id + "&User=" + qurryString.parse(window.location.search).User + '&UserName=' + this.state.searchUserName}> <Button disabled type='submit' id='btnupdate' >Update</Button></Link>
                                                        </Col>
                                                    </Row>

                                                </Col>
                                            </Row>
                                        </Form><br />
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div >
        );
    }
}
export default MechanicInfo;


