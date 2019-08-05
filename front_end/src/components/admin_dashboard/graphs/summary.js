import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
let CanvasJSReact = require('./canvasjs.react').default;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;
class OrderGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Summary : [],
            Border: Number,
            Corder : Number,
            Mechanics : Number,
        }
    }
    componentDidMount(){
        axios.post("/Admin/briefSummary")
        .then(responce=>{
            // console.log(responce.data)
            this.setState({Summary: responce.data})
            // console.log(this.state.Summary);
            let percentage ;
            let total = this.state.Summary[0]+this.state.Summary[1]+this.state.Summary[2];
            // console.log(total);
            percentage = Math.round( (this.state.Summary[2]*100)/total);
            this.setState({Mechanics:percentage})
            percentage = Math.round( (this.state.Summary[1]*100)/total);
            this.setState({Border:percentage})
            percentage = Math.round( (this.state.Summary[0]*100)/total);
            this.setState({Corder:percentage})

            // console.log(percentage)
            
        })
        .catch(err=> console.log(err));
    
    }
    render() {
        const options = {
            title: {
                text: "Brief Summary",
                fontWeight:400,
                fontSize: 15
            },
            data: [{
                type: "column",
                dataPoints: [
                    { label: "Register Mechanics", y: this.state.Summary[2] },
                    { label: "Booked Orders", y: this.state.Summary[1] },
                    { label: "Complete Order", y: this.state.Summary[0] },

                ]
            }]
        }
        const options2 = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light1", // "light1", "dark1", "dark2"
            title: {
                text: "Brief Summary",
                fontWeight:400,
                fontSize: 15
            },
            data: [{
                type: "pie",
                indexLabel: "{label}: {y}%",
                startAngle: -90,
                dataPoints: [
                    { y: this.state.Mechanics, label: "Register Mechanics" },
                    { y: this.state.Border, label: "Booked Orders" },
                    { y: this.state.Corder, label: "Complete Order" },
                ]
            }]
        }
        return (
            <div>
                <Row>
                    <Col xs={12} lg={6}>
                        <CanvasJSChart options={options} /><br />
                    </Col>
                    <Col xs={12} lg={6}>
                        <CanvasJSChart options={options2} />
                    </Col>
                </Row>
            </div>
        );
    }
}
export default OrderGraph;