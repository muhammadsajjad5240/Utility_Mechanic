import axios from 'axios'
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { OfflinePin,Delete,Replay, CheckCircle } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
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
    
  }
  DeleteOrder =()=>
  {
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
        axios.post('/Admin/delete-completed-order', {id: deletedata[i][0]})
          .then(responce => {
            // console.log(responce.data);
            // let a = responce.statusText;
            // console.log(deletedata.length+""+i+1);
            if (responce.data.success===true) {
              window.location.reload();
            }

          })
          .catch(error => { alert(error) })
  }
}
  render() {
    const { classes } = this.props;

    return (

      <div className={classes.iconContainer}>

        <Tooltip title={"Delete"}>
          <IconButton id='delete' className={classes.iconButton} onClick={this.DeleteOrder}>
            <Delete className={classes.icon} />
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}

export default withStyles(defaultToolbarSelectStyles, { name: "CustomToolbarSelect" })(CustomToolbarSelect);