import axios from 'axios'
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import {OfflinePin , NotInterestedRounded, CheckCircle } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
const qurryString = require("query-string");

const defaultToolbarSelectStyles = {
  iconButton: {
  },
  iconContainer: {
    marginRight: "24px",
  },
  inverseIcon: {
    transform: "rotate(90deg)",
  },
};


class CustomToolbarSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Code: ''
    }
  }
  componentDidMount(){
    let rowindex = this.props.selectedRows.data;
    let deleteindex = [], deletedata = [], i = 0;
    rowindex.map(index => {

      console.log(index.dataIndex)
      deleteindex[i] = index.dataIndex
      i++;
    })//map funcation for filter deleted index

    let j = 0;
    this.props.Data.map(data => {
      // console.log(data.data)
      for (i = 0; i < deleteindex.length; i++) {
        if (data.dataIndex === deleteindex[i]) {
          deletedata[j] = data.data;
          j++;
        }
      }
    })// map funcation for row data against indexes
    if(deletedata[0][8]==='In Process')
    {
      document.getElementById('accept').style.display = 'none';
      document.getElementById('reject').style.display = 'none';
    }
    if(deletedata[0][8]==='Done')
    {
      document.getElementById('complete').style.display = 'none';
      document.getElementById('accept').style.display = 'none';
      document.getElementById('reject').style.display = 'none';
    }
  }

  Rejectorder = () => {
    let rowindex = this.props.selectedRows.data;
    let deleteindex = [], deletedata = [], i = 0;
    rowindex.map(index => {

      console.log(index.dataIndex)
      deleteindex[i] = index.dataIndex
      i++;
    })//map funcation for filter deleted index

    let j = 0;
    this.props.Data.map(data => {
      // console.log(data.data)
      for (i = 0; i < deleteindex.length; i++) {
        if (data.dataIndex === deleteindex[i]) {
          deletedata[j] = data.data;
          j++;
        }
      }
    })// map funcation for row data against indexes

        axios.post('/Mechanic/Reject-order', {
            id: deletedata[0][0],
          })//Axios method end
          .then(responce => {
            console.log(responce.data);
            let a = responce.statusText;
            if (a === 'OK') {
              alert("Order Rejected")
              window.location.reload();
            }

          })//then method end 
          .catch(error => { alert(error) })//cathch method end
        // console.log(deleteindex);
        // console.log(deletedata);
        // window.location.reload();


  }
  Acceptorder = () => {
    let rowindex = this.props.selectedRows.data;
    let deleteindex = [], deletedata = [], i = 0;
    rowindex.map(index => {
      console.log(index.dataIndex)
      deleteindex[i] = index.dataIndex
      i++;
    })//map funcation for filter deleted index
    let j = 0;
    this.props.Data.map(data => {
      for (i = 0; i < deleteindex.length; i++) {
        if (data.dataIndex === deleteindex[i]) {
          deletedata[j] = data.data;
          j++;
        }
      }
    })
    if(deletedata[0][8]!=="In Process")
    {
      //qurryString.parse(window.location.search).id
      axios.post('/Mechanic/Accept-order',
      {
        id:deletedata[0][0],
        Mechanicid: qurryString.parse(window.location.search).id,
        CoustomePhone : deletedata[0][3],
        Cusername:deletedata[0][1],
        Cname:deletedata[0][2],
        Caddress: deletedata[0][4],
        Cservice:deletedata[0][6],
        Ccategory:deletedata[0][5],


      })//axios method end
      .then(responce=>{console.log(responce.data)
        if(responce.data.success===true)
        {
          alert('order Accepted');
          window.location.reload();
        }
      })
      .catch(err=>console.log(err))
    // alert('order Accept')

    }
    else{
        alert('Mechanic Already Assign')
    }
    console.log(deleteindex);
    console.log(deletedata);
  }
  Completetask = () => {
    let rowindex = this.props.selectedRows.data;
    let deleteindex = [], deletedata = [], i = 0;
    rowindex.map(index => {
      console.log(index.dataIndex)
      deleteindex[i] = index.dataIndex
      i++;
    })//map funcation for filter deleted index
    let j = 0;
    this.props.Data.map(data => {
      for (i = 0; i < deleteindex.length; i++) {
        if (data.dataIndex === deleteindex[i]) {
          deletedata[j] = data.data;
          j++;
        }
      }
    })
    if(deletedata[0][8]==='In Process')
    {

      axios.post("/Mechanic/complete-order",
      { 
        id:deletedata[0][0],
        Mid: qurryString.parse(window.location.search).id
      })
      .then(responce=>{
        console.log(responce.data.success)
        if(responce.data.success===true)
        {
          alert("you are Active Now")
          window.location.reload();
        }
        
      })
      .catch(err=> console.log(err))

    }
    else if(deletedata[0][8]==='Waiting...')
    {
      alert("Order Not Accepted by you")
    }
    else{
      alert("task Already complete")
    }


  // alert('task complete')
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.iconContainer}>
          <Tooltip title={"Complete Task"}>
          <IconButton id='complete' className={classes.iconButton} onClick={this.Completetask} >
            <OfflinePin className={classes.icon} />
          </IconButton>
        </Tooltip>
        <Tooltip title={"Accept Order"}>
          <IconButton id='accept'  className={classes.iconButton} onClick={this.Acceptorder} >
            <CheckCircle className={classes.icon} />
          </IconButton>
        </Tooltip>
        
        <Tooltip title={"Reject Order"}>
          <IconButton id='reject' className={classes.iconButton} onClick={this.Rejectorder}>
            <NotInterestedRounded  className={classes.icon} />
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}

export default withStyles(defaultToolbarSelectStyles, { name: "CustomToolbarSelect" })(CustomToolbarSelect);