import React, { Component } from 'react';
import axios from 'axios';
import './Dashboard-Home.css';
import {Link} from 'react-router-dom';
const qurryString = require("query-string");
let obj,my;
class SideProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          username: null,
          imgpath: '',
          selectedFile: '',
        };
      }
    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
      };
    componentDidMount(){
      document.getElementById('Mname').innerHTML = qurryString.parse(window.location.search).User;
        let pramerter = qurryString.parse(window.location.search)
        axios.post("/api/imgget", { Id: pramerter.id })
          .then(responce => {//console.log(responce.data);
            this.setState({ img: responce.data })
            this.setState(this.state.data = responce.data)
            for (let i in this.state.data) {
              obj = this.state.data[i];
            };
            const base64Flag = 'data:image/png;base64,';
            const imageStr = this.arrayBufferToBase64(obj.img.data.data)
            my = base64Flag + imageStr;
            this.setState({ img: my })
          })//then end here 
          .catch(error => console.log(error));
    }
    render() {
        return(
            <div style={{width:'200px', height:'200px'}}>
             <Link to={"/Mechanic-Dashboard?id="+qurryString.parse(window.location.search).id+"&User="+qurryString.parse(window.location.search).User}>
            <img src={my} id='SideProfileImg' /><br/><br />
           <center> <h3 style={{color:'White'}} id='Mname'>Profile</h3></center></Link>
            </div>
        );
        
    }

}
export default SideProfile;