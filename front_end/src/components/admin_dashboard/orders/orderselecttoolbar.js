
import { Delete, SubdirectoryArrowLeft } from "@material-ui/icons";
import axios from 'axios'
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import { TransferWithinAStation, CheckCircle } from "@material-ui/icons";
import BlockIcon from "@material-ui/icons/Block";
import { withStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom';
const qurryString = require("query-string");
// import './CustomerOrder.css';

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

  handleClick = () => {
    // console.log("clicked on icon!",this.props.selectedRows.data);
    // console.log("clicked on icon!",this.props.Data);
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
    })
    // map funcation for row data against indexes
    for (i = 0; i < deletedata.length; i++) {
    //   console.log(deletedata[i][0], "kaya" + deletedata[i][4])
    //   let a = [];
    //   let b = deletedata[i][6]
    //   a = b.split(':')
    //   console.log(b);
    //   console.log(a[0] + " ki wa")
    //   let num = parseInt(a[0], 10)
    //   num = num + 2;
    //   let timecheck = num + ':' + a[1];
    //   console.log(timecheck)
        axios.post('/Customer/delete-order', { UserName: deletedata[i][1], service: deletedata[i][5] })
          .then(responce => {
            console.log(responce.data);
            let a = responce.statusText;
            if (a === 'OK') {
              window.location.reload();
            }

          })
          .catch(error => { alert(error) })
        console.log(deleteindex);
        console.log(deletedata);
        // window.location.reload();
    }//delete data for loop end

  }
  Mechanicassign = () => {
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
    window.location= "/assigned-mechanics?id=" + qurryString.parse(window.location.search).id + "&User=" + qurryString.parse(window.location.search).User
    + "&category=" + deletedata[0][6] + "&service=" + deletedata[0][5] + "&CName=" + deletedata[0][0]
     
    }
    else{
        alert('Mechanic Already Assign')
    }
    console.log(deleteindex);
    console.log(deletedata);
  }
  handleConfirm = () => {
    document.getElementById('check').style.display = 'none';
    //
    document.getElementById('codetext').style.display = 'none';
  }

  render() {
    const { classes } = this.props;

    return (

      <div className={classes.iconContainer}>
        <Tooltip title={"Assign Mechanic"}>
          <IconButton className={classes.iconButton} onClick={this.Mechanicassign} >
            <TransferWithinAStation className={classes.icon} />
          </IconButton>
        </Tooltip>
        
        <Tooltip title={"Delete"}>
          <IconButton className={classes.iconButton} onClick={this.handleClick}>
            <Delete className={classes.icon} />
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}

export default withStyles(defaultToolbarSelectStyles, { name: "CustomToolbarSelect" })(CustomToolbarSelect);