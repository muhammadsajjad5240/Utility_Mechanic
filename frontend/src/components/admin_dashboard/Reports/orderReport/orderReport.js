import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import '../Reports.css';
import axios from 'axios';
import OrderGraph from '../../graphs/BookedorderGraph';

import { Row, Col} from 'react-bootstrap';
import MyCustomToolbarSelect from './CompleteOrdeTollBar';
class OrderReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completeOrder: [],
        };
    }
    componentDidMount() {
        axios.post('/Admin/get-completed-orders')
            .then(response => {
                this.setState({ completeOrder: response.data });
                console.log(this.state.completeOrder);
            })
            .catch(function (error) {
                console.log(error);
            })
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
            ),

        };
        return (
            <div className='report'>
                <Row>
                    <Col xs={12} lg={12}><br /><br />
                        <h1>Order Report</h1><br />
                        <MuiThemeProvider theme={this.getMuiTheme()}>
                    <MUIDataTable

                        title={"Utility Mechanic Order Report"}
                        data={this.state.completeOrder.map(record => {
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
                </MuiThemeProvider> <br/> <br/>
                <OrderGraph />
                    </Col>
                </Row>
            </div>
        );
    }
}
export default OrderReport;

