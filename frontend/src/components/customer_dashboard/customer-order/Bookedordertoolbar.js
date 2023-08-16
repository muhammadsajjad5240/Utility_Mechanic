import axios from 'axios'
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { OfflinePin,Delete,Replay, CheckCircle } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import './CustomerOrder.css';

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
    })
    if(deletedata[0][9]==='true')
    {
      document.getElementById('confirm').style.display = 'none';
      document.getElementById('resend').style.display = 'none';
      document.getElementById('codetext').style.display = 'none';
    }
    if(deletedata[0][7]==='Done')
    {
      document.getElementById('delete').style.display = 'none';
      document.getElementById('complete').style.display = 'block';
    }
    if(deletedata[0][7]==='In Process')
    {
      document.getElementById('delete').style.display = 'none';
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
      if (deletedata[i][7] === 'Waiting...') {
        axios.post('/Customer/delete-order', { UserName: deletedata[i][0], service: deletedata[i][4] })
          .then(responce => {
            // console.log(responce.data);
            let a = responce.statusText;
            if (a === 'OK') {
              window.location.reload();
            }

          })
          .catch(error => { alert(error) })
        // console.log(deleteindex);
        // console.log(deletedata);
      }//if condition end
      else {

        alert("order is locked")

        // window.location.reload();
      }
    }//delete data for loop end

  }
  Resendcode = () => {
    // console.log("clicked on icon!",this.props.selectedRows.data);
    // console.log("clicked on icon!",this.props.Data);
    let rowindex = this.props.selectedRows.data;
    let deleteindex = [], deletedata = [], i = 0;
    rowindex.map(index => {
      // console.log(index.dataIndex)
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
    
    if (deletedata[0][9] === 'false') {
      for (i = 0; i < deletedata.length; i++) {

        let val = Math.floor(1000 + Math.random() * 9000);
        axios.post('/Customer/send-code', {
          UserName: deletedata[i][0],
          service: deletedata[i][4],
          phone: deletedata[i][2],
          Code: val
        })
          .then(responce => {
            // console.log(responce.data.success);

            if (responce.data.success !== false) {
              alert("Code resend valid for 1 minute");
            }
            else {
              alert('your priveous code in not expire')
            }


          })
          .catch(error => { alert(error) })
        // console.log(deleteindex);
        // console.log(deletedata);
      }//delete data for loop end
    }
    else {
      alert("order Already confirm")
    }

  }
  handleCode = (e) => {

    this.setState({ Code: e.target.value })
    const re = /^[0-9\b]+$/;
    if (re.test(this.state.Code)) {
      document.getElementById('codetext').style.borderBottom = '1px solid green';
    }
    else {
      document.getElementById('codetext').style.borderBottom = '1px solid red';
    }
  }
  handleConfirm = () => {
    let rowindex = this.props.selectedRows.data;
    let deleteindex = [], deletedata = [], i = 0;
    rowindex.map(index => {
      // console.log(index.dataIndex)
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
    if (deletedata[0][9] === 'false') {

      let a = true
      const re = /^[0-9\b]+$/;
      if (re.test(this.state.Code)) {
        document.getElementById('codetext').style.borderBottom = '1px solid green';

      }
      else {
        document.getElementById('codetext').style.borderBottom = '1px solid red';
        a = false
      }
      if (a) {
        a = document.getElementById('codetext').value
        // console.log(a)
        a = parseInt(a);
        // console.log(a);
        axios.post('/Customer/confirm-code', { Code: a })
          .then(responce => {
            // console.log(responce.data)
            if (responce.data.length !== 0) {
              axios.post("/Customer/order-confirm", { UserName: deletedata[0][0], service: deletedata[0][4] })
                .then(responce => {
                  // console.log(responce.data.ok===1)
                  if(responce.data.ok===1)
                  {
                    alert('Order Confirm')
                    window.location.reload();
                  }

                })
                .catch(err => console.log(err))
            }
            else {
              alert("Your code is expire")
            }

          })
          .catch(err => console.log(err))
      }
      else {
        document.getElementById('codetext').select();
      }

    }
    else {
      alert('already confirm');
      document.getElementById('check').style.display = 'none';
      //
      document.getElementById('codetext').style.display = 'none';
    }
  }
  Completeorder = ()=>{
    let rowindex = this.props.selectedRows.data;
    let deleteindex = [], deletedata = [], i = 0;
    rowindex.map(index => {
      // console.log(index.dataIndex)
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
    if (deletedata[0][9] === 'true') {
      axios.post("/Customer/order-complete", { UserName: deletedata[0][0], service: deletedata[0][4] })
      .then(responce=>{console.log(responce.data)
        if(responce.data.success===true)
        {
          alert('Order Complete!\nThankyou For Chosing Us')
          window.location.reload();
        }
      })
      .catch(err=>console.log(err))
    }
    else if(deletedata[0][9] === 'false'){
      alert("first Confirm order And then Waiting for Mechani Confirm and then it will Complete")
    }
    else {
      alert("order Already Book")
    }
  }

  render() {
    const { classes } = this.props;

    return (

      <div className={classes.iconContainer}>
        <Tooltip title={"Completed"}>
          <IconButton style={{display:'none'}} id='complete' className={classes.iconButton} onClick={this.Completeorder}>
            <OfflinePin />
          </IconButton>
          </Tooltip>
        <input placeholder='Confirmation Code' value={this.state.Code} onChange={this.handleCode} type='text' id='codetext' maxLength='4' minLength='4' />
        <Tooltip title={"Confirm"}>
          <IconButton id='confirm' className={classes.iconButton} onClick={this.handleConfirm}>
            <CheckCircle />
          </IconButton>
        </Tooltip>
        <Tooltip title={"Resend Code"}>
          <IconButton id='resend' className={classes.iconButton} onClick={this.Resendcode}>
            <Replay className={classes.icon} />
          </IconButton>
        </Tooltip>
        <Tooltip title={"Delete"}>
          <IconButton id='delete' className={classes.iconButton} onClick={this.handleClick}>
            <Delete className={classes.icon} />
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}

export default withStyles(defaultToolbarSelectStyles, { name: "CustomToolbarSelect" })(CustomToolbarSelect);