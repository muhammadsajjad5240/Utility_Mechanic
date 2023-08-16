import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import '../Reports.css';
import axios from 'axios';
import CustomDelete from './CustomerTollBar';
import { Row, Col} from 'react-bootstrap';
class CustomerReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerReport: [],
            Rowindex: 0
        };
    }
    componentDidMount() {
        this.setState({ Rowindex: 0 })
        axios.post('/Admin/customer-report')
            .then(response => {
                this.setState({ customerReport: response.data });
                console.log(this.state.customerReport);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    deleteRecord = (event) => {
        let a = document.getElementById('Rw' + event.target.id)
        a = a.getElementsByTagName('td')
        axios.post('/Admin/delete-Customer', { id: a[0].innerText })
            .then(responce => {
                console.log(responce.data);
                let a = responce.statusText;
                if (a === 'OK') {
                    axios.post("/Profile/delete-Profile", { Id: a[0].innerText })
                        .then(responce => {
                            console.log(responce.data)
                            axios.post('/Admin/customer-report')
                                .then(response => {
                                    this.setState({ customerReport: response.data });
                                    console.log(this.state.customerReport);
                                })
                                .catch(function (error) {
                                    console.log(error);
                                })//state set
                        })//delete prifile image route then end


                }

            })
            .catch(error => { alert(error) })

    }
    getMuiTheme = () =>
        createMuiTheme({
            overrides: {
                MUIDataTable: {
                    responsiveScroll: {maxWidth: "100%"},
                    root: {
                        
                    },
                    paper: {
                        boxShadow: "none"
                    }
                },
                MUIDataTableBodyCell: {
                    root: {
                        fontSize: '0.8em',
                        
                    }
                }
            }
        });
    render() {
        const columns = ["ID", "Name", "Email", "User Name", "Phone", "Address"];
        const options = {
            filter: false,
            responsive: "scroll",
            rowsPerPage	: 10,
            rowsPerPageOptions	: [5,10,15,25,100],
            selectableRows: 'single',
            selectableRowsOnClick: true,
            customToolbarSelect: (selectedRows, rowsdata) => (
                <CustomDelete
                    selectedRows={selectedRows}
                    Data={rowsdata}
                />
            ),
        };
        return (
            <div className='report'>
                <Row>
                    <Col xs={12} lg={12}><br /><br />
                        <h1>Customer Report</h1><br />
                        <MuiThemeProvider theme={this.getMuiTheme()}>
                    <MUIDataTable

                        title={"Customer List"}
                        data={this.state.customerReport.map(record => {
                            return [
                                record._id,
                                record.Name,
                                record.Email,
                                record.UserName,
                                record.Phone,
                                record.Address,
                            ]
                        })}
                        columns={columns}
                        options={options}
                    />
                </MuiThemeProvider>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default CustomerReport;

