import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import axios from 'axios';
import MUIDataTable from "mui-datatables";
import MyCustomToolbarSelect from './Tabletoolbar';
import MyCustomToolbarSelect2 from './CompleteOrdeTollBar';
import { createMuiTheme, MuiThemeProvider,} from "@material-ui/core/styles";
import './MechanicTasks.css';
const qurryString = require("query-string");
class UserTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mechanicOrder: [],
            data: [],
            Musername: '',
        }
    }
    componentDidMount = () => {
        let pramerter = qurryString.parse(window.location.search)
        // console.log(window.location.search)
        axios.post("/Mechanic/get-machanic-orders", {
            Id: pramerter.id
        })
            .then(responce => {
                console.log(responce.data)
                this.setState({ mechanicOrder: responce.data })
            })
            .catch(error => { console.log(error) });

            axios.post("/Mechanic/get-complete-order", {
            Id: pramerter.id
        })
            .then(responce => {
                console.log(responce.data)
                this.setState({ data: responce.data })
            })
            .catch(error => { console.log(error) });

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
        const columns = ["ID","UserName", "Full Name", "Phone", "Address","Category", "Service",  "Time/Date", "Status", "Mechanic"];
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
            )
        };
        const completeTableoptions= {
            filter: false,
            responsive: "scroll",
            rowsPerPage: 5,
            rowsPerPageOptions: [5, 10, 15, 25, 100],
            selectableRows: 'single',
            selectableRowsOnClick: true,
            customToolbarSelect: (selectedRows,rowsdata) => (
                <MyCustomToolbarSelect2
                  selectedRows={selectedRows}
                  Data = {rowsdata}
                />
              ),
        }
        return (
            <div id='mechanicTasks'>
                <Col xs={12} lg={12} ><br /><br />
                    <h1>Process Orders</h1><br />
                    <MuiThemeProvider theme={this.getMuiTheme()}>

                        <MUIDataTable

                            title={"Mechanic Task List"}
                            data={this.state.mechanicOrder.map(record => {
                                return [
                                    record._id,
                                    record.UserName,
                                    record.fullName,
                                    record.phone,
                                    record.address,
                                    record.category,
                                    record.service,
                                    record.DateAndTime,
                                    record.Status,
                                    record.Mechanic,
                                ]
                            })}
                            columns={columns}
                            options={options}
                        />
                    </MuiThemeProvider><br />
                    <h1>Completed Oreders</h1><br />
                    <MuiThemeProvider theme={this.getMuiTheme()}>

                        <MUIDataTable

                            title={"Completed Task List"}
                            data={this.state.data.map(record => {
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
                            options={completeTableoptions}
                        />
                    </MuiThemeProvider><br />

                </Col>
            </div>
        );
    }
}
export default UserTasks;