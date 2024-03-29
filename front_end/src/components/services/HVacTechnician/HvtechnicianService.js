import React, { Component } from 'react';
import axios from 'axios';
import MUIDataTable from "mui-datatables";
import {createMuiTheme, MuiThemeProvider, withStyles} from "@material-ui/core/styles";
class HvacService extends Component {
    constructor(props) {
        super(props);
        this.state = { HvacService: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/electrical-prices')
            .then(response => {
                this.setState({ HvacService: response.data });
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
        const columns = ["ID", "Service Name", "Category"];
        const options = {
            filter: false,
            responsive: "scroll",
            rowsPerPage	: 5,
            rowsPerPageOptions	: [5,10,15,25,100],
            selectableRows: true
        };
        return (
            <div>
                <MuiThemeProvider theme={this.getMuiTheme()}>
                    <MUIDataTable
                        title={"HVecTechnician Service"}
                        data={this.state.HvacService.map(service => {
                            return [
                                service._id,
                                service.Name,
                                service.Category
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
export default HvacService;