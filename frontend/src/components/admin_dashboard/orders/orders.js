import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import './orders.css';
import axios from 'axios';
import { ImportExport } from '@material-ui/icons';
import MyCustomToolbarSelect from './orderselecttoolbar';
const qurryString = require("query-string");
class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: [],
            serchOrder: [],
            orderedUserName: '',
            Rowindex: 0,
            Row1index: 0

        };

    }
    componentDidMount() {
        this.setState({ Rowindex: 0 })
        this.setState({ Row1index: 0 })
        axios.get('/Admin/orders')
            .then(response => {
                this.setState({ order: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    handleCustomerName = (e) => {
        e.preventDefault();
        this.setState({ orderedUserName: e.target.value });
    }
    searchCustomer = (e) => {
        e.preventDefault();
        let letters = /^[a-zA-Z]+/;
        let searchCustomerName = document.getElementById('searchCustomerName').value;
        if (!letters.test(searchCustomerName)) {
            document.getElementById('searchCustomerName').style.border = '1px solid red';
        }
        else {

            axios.post('/Admin/search-orders-by-admin', { Username: this.state.orderedUserName })
                .then(response => {

                    this.setState({ serchOrder: response.data });
                    console.log(this.state.serchOrder);
                    if (this.state.serchOrder.length === 0) {
                        alert("No Match Found!")
                        document.getElementById('searchCustomerName').select();
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
    getMuiTheme = () =>
    createMuiTheme({
        overrides: {
            MUIDataTable: {
                responsiveScroll: {maxWidth: "100%"},
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
        const columns = ["ID","UserName", "Full Name", "Phone", "Address", "Service", "Category", "Time/Date", "Status", "Mechanic"];
        const options = {
            filter: false,
            responsive: "scroll",
            rowsPerPage	: 10,
            rowsPerPageOptions	: [5,10,15,25,100],
            selectableRows: 'single',
            selectableRowsOnClick: true,
            customToolbarSelect: (selectedRows, rowsdata) => (
                <MyCustomToolbarSelect
                    selectedRows={selectedRows}
                    Data={rowsdata}
                />
            )
        };
        return (
            <div id='orders' ><br /><br />
                <h1>Booked Oreders</h1><br />
                <MuiThemeProvider theme={this.getMuiTheme()}>
                    <MUIDataTable

                        title={"Booked Orders list"}
                        data={this.state.order.map(record => {
                            return [
                                record._id,
                                record.UserName,
                                            record.fullName,
                                            record.phone,
                                            record.address,
                                            record.service,
                                            record.category,
                                            record.DateAndTime,
                                            record.Status,
                                            record.Mechanic,
                            ]
                        })}
                        columns={columns}
                        options={options}
                    />
                </MuiThemeProvider>
                
            </div>
        );
    }
}
export default Orders;