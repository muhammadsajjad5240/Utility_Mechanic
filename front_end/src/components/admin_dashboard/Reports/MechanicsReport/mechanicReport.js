import React, { Component } from 'react';
import { Row, Col, Table} from 'react-bootstrap';
import '../Reports.css';
import MUIDataTable from "mui-datatables";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import axios from 'axios';
import CustomDelete from './MechanicTollBar';
import MechanicGraph from '../../graphs/mechanicGraph';;
let a = 1;
class MechanicReport extends Component {
    constructor(props) {
        super(props);
        this.state = { signUp: [], Rowindex: 0};
    }
    componentDidMount() {
        axios.get('/Admin/getAll-Mechanics')
            .then(response => {
                // console.log(response.data);
                this.setState({ signUp: response.data })
            })
            .catch(function (error) {
                console.log(error);
            })
        this.setState({ Rowindex: 0 })

    }
    deleteRecord = (event) => {
        let a = document.getElementById('Rw' + event.target.id)
        a = a.getElementsByTagName('td')
        axios.post('/Admin/delete-Mechanic', { UserName: a[3].innerText })
            .then(responce => {
                console.log(responce.data);
                let a = responce.statusText;
                if (a === 'OK') {
                    axios.post("/Profile/delete-Profile", { Id: a[0].innerText })
                        .then(responce => {
                            console.log(responce.data)

                            axios.get('/Admin/getAll-Mechanics')
                                .then(response => {
                                    this.setState({ signUp: response.data });
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
        const columns = ["ID", "Name", "Email", "User Name", "Phone", "Category", "Service", "Action"];
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
                <br /><br />
                <h1>Mechanic Report</h1><br />
                <Row>
                    <Col lg={12}>
                <MuiThemeProvider theme={this.getMuiTheme()}>
                    <MUIDataTable

                        title={"Mechanic List"}
                        data={this.state.signUp.map(record => {
                            return [
                                record._id,
                                record.Name,
                                record.Email,
                                record.UserName,
                                record.Phone,
                                record.Category,
                                record.sevices,
                                // record.Email
                            ]
                        })}
                        columns={columns}
                        options={options}
                    />
                </MuiThemeProvider> <br /><br />
                <MechanicGraph />
                  </Col>
                </Row>
                <br /><br />
            </div>
        );
    }
}
export default MechanicReport;