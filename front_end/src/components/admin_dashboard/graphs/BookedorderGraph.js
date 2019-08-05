import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
let CanvasJSReact = require('./canvasjs.react').default;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;
class ServiceGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Summary : [],
            Electricion: Number,
            Cleaning : Number,
            Plumber: Number,
            CarPanter: Number,
            Painter: Number,
            Construction: Number,
            AC: Number,
        }
    }
    componentDidMount(){
        axios.post("/Admin/completeorderSummary")
        .then(responce=>{
            // console.log(responce.data)
            this.setState({Summary: responce.data})
            // console.log(this.state.Summary);
            let percentage ;
            let total = this.state.Summary[0]+this.state.Summary[1]+this.state.Summary[2]+this.state.Summary[3]+this.state.Summary[4]+this.state.Summary[5]+this.state.Summary[6];
            console.log(total);
            percentage = Math.round( (this.state.Summary[0]*100)/total);
            this.setState({Electricion:percentage})
            percentage = Math.round( (this.state.Summary[1]*100)/total);
            this.setState({Cleaning:percentage})
            percentage = Math.round( (this.state.Summary[2]*100)/total);
            this.setState({Plumber:percentage})
            percentage = Math.round( (this.state.Summary[3]*100)/total);
            this.setState({CarPanter:percentage})
            percentage = Math.round( (this.state.Summary[4]*100)/total);
            this.setState({Painter:percentage})
            percentage = Math.round( (this.state.Summary[5]*100)/total);
            this.setState({Construction:percentage})
            percentage = Math.round( (this.state.Summary[6]*100)/total);
            this.setState({AC:percentage})

            // console.log(percentage)
            
        })
        .catch(err=> console.log(err));
    }
    render() {
        const options = {
            title: {
                text: "Brief Summary of Our Booked Services",
                fontWeight:400,
                fontSize: 15
            },
            data: [{
                type: "column",
                dataPoints: [
                    { label: "Electricion", y: this.state.Summary[0] },
                    { label: "Home Cleaning", y: this.state.Summary[1] },
                    { label: "Plumber", y: this.state.Summary[2] },
                    { label: "CarPanter", y: this.state.Summary[3] },
                    { label: "Painter", y: this.state.Summary[4] },
                    { label: "Construction", y: this.state.Summary[5] },
                    { label: "A/C Service ", y: this.state.Summary[6] }
                ]
            }]
        }
        const options2 = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "dark2", // "light1", "dark1", "dark2"
            title: {
                text: "Brief Summary of Our Booked Services",
                fontWeight:400,
                fontSize: 15
            },
            data: [{
                type: "pie",
                indexLabel: "{label}: {y}%",
                startAngle: -90,
                dataPoints: [
                    { y: this.state.Electricion, label: "Electricion" },
                    { y: this.state.Cleaning, label: "Home Cleaning" },
                    { y: this.state.Plumber, label: "Plumber" },
                    { y: this.state.CarPanter, label: "CarPanter" },
                    { y: this.state.Painter, label: "Painter" },
                    { y: this.state.Construction, label: "Construction" },
                    { y: this.state.AC, label: "A/C Service" }
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
export default ServiceGraph;