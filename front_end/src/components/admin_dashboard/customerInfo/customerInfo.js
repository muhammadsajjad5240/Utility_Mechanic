import React, { Component } from 'react';
import axios from 'axios';
import MUIDataTable from "mui-datatables";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import './customerInfo.css';
import CustomDelete from './CustomerTollBar';
class CustomerDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            CustomerDetail: [],
            SearchCustomerDetail: [],
            searchCustomerName: '',
            Rowindex:0,
            Row1index:0
            }
    }
    componentDidMount() {
        this.setState({Rowindex:0})
        this.setState({Row1index:0})
        axios.get('/Admin/customer-detail')
            .then(response => {
                this.setState({ CustomerDetail: response.data });
                console.log(this.state.CustomerDetail);
            })
            .catch((error)=> {
                console.log(error);
            })
        // document.getElementById('username').innerHTML = qurryString.parse(window.location.search).User;
    }
    handleCustomerName = (e) => {
        e.preventDefault();
        this.setState({ searchCustomerName: e.target.value });
    }
    handleSorting = (e) => {
        this.setState({ sortBy: e.target.value });
    }
    searchCustomer = (e) => {
        e.preventDefault();
        let letters = /^[a-zA-Z]+/;
        let searchCustomerName = document.getElementById('searchCustomerName').value;
        if (!letters.test(searchCustomerName)) {
            document.getElementById('searchCustomerName').style.border = '1px solid red';
        }
        else {
            let obj;
            
            axios.post('/Admin/search-customer', { customerName: this.state.searchCustomerName })
            .then(response => {
                
                this.setState({ SearchCustomerDetail: response.data });
                console.log(this.state.SearchCustomerDetail);
                if(this.state.SearchCustomerDetail.length===0)
                {
                    alert("No Record Found")
                    document.getElementById('searchCustomerName').select();
                }
            })
            .catch((error)=> {
                console.log(error);
            })
        }
    }
    deleteRecord = (event)=>
    {
        // alert(event.target)

        // console.log(event.target.id);

       let a= document.getElementById('Rw'+event.target.id)

        // console.log(a.getElementsByTagName('td'))
       
        a= a.getElementsByTagName('td')
        // console.log(a[2].innerText);
        // console.log(a[4].innerText);
        axios.post('/Admin/delete-Customer',{id:a[0].innerText})
        .then(responce=>{
            console.log(responce.data);
            let a= responce.statusText; 
            if(a ==='OK')
             {
                axios.post("/Profile/delete-Profile", { Id:a[0].innerText })
                .then(responce => {
                  console.log(responce.data)
                  axios.get('/Admin/customer-detail')
                  .then(response => {
                      this.setState({ CustomerDetail: response.data });
                      console.log(this.state.CustomerDetail);
                  })
                  .catch((error)=> {
                      console.log(error);
                  })//state set
                  axios.post('/Admin/search-customer', { customerName: this.state.searchCustomerName })
                  .then(response => {
                      
                      this.setState({ SearchCustomerDetail: response.data });
                      console.log(this.state.SearchCustomerDetail);
                  })
                  .catch((error)=> {
                      console.log(error);
                  })//second state set
                
                })//delete prifile image route then end
           }
        
          })
          .catch(error=>{alert(error)})

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
        const columns = ["ID", "Name", "Email", "User Name", "Phone", "Address"];
        const options = {
            filter: false,
            responsive: "scroll",
            rowsPerPage: 10,
            rowsPerPageOptions: [5, 10, 15, 25, 100],
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

            <div id='adminCustomerInfo' ><br /><br />
                <h1>Our Customers</h1><br /><br />
                <MuiThemeProvider theme={this.getMuiTheme()}>

                            <MUIDataTable

                                title={"Customer List"}
                                data={this.state.CustomerDetail.map(record => {
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
            </div >
        );
    }
}
export default CustomerDetail;