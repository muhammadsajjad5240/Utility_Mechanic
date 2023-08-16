import React, { Component } from 'react';
import { Row, Col, Button, Carousel } from 'react-bootstrap';
import avater from '../../images/avater.png';
import './about.css';
import axios from 'axios';
let obj, mechanicsimg = [];
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mechanic: [],
            mimg: [],
            i: 0
        };
    }
    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };
    componentDidMount() {
        this.setState({ i: 0 });
        axios.get('/Admin/getAll-Mechanics')
            .then(response => {
                this.setState({ mechanic: response.data });
                response.data.map((img, index) => {
                    console.log(img._id)
                    axios.post("/Profile/imgget", { Id: img._id })
                        .then(responce => {
                            console.log(responce.data);
                                this.setState(this.state.data = responce.data)
                                for (let i in this.state.data) {
                                    obj = this.state.data[i];
                                };
                                const base64Flag = 'data:image/png;base64,';
                                const imageStr = this.arrayBufferToBase64(obj.img.data.data)
                                mechanicsimg[index] = base64Flag + imageStr;

                            this.setState({ mimg: mechanicsimg })
                        })//then end here 
                        .catch(error => {
                            console.log(error + "no me")
                            mechanicsimg[index] = avater;
                        });
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div id='homeAbout'>
                <Row>
                    <Col xs={12} lg={{ span: 6, offset: 1 }}>
                        <h4>UTILITYMECHANIC.PK SINCE 2019(FASTEST GROWING ONLINE MECHANIC PLATFORM)</h4>
                        <hr />
                        <p className='aboutParagraph'>UTILITYMECHANIC.PK is an Online Mechanic Platform that provides reliable
                        and expert Car Mechanics, Motorcycle Mechanics and Generator Mechanics in Pakistan
                         at the convenience of your Door Step. Be it a basic maintenance work or Complete
                         Engine Overhaul, our Ustaad will fix it all at your desired location. MechanicUstaad.
                         pk is making the lives easier of those who owns Car/ Motorbike/ Generator and having
                         issues with maintaining it due to the hell-packed schedule.</p>
                        <br />
                        <Button>Service</Button>
                    </Col>
                    <Col xs={12} lg={{ span: 4, offset: 1 }}>
                        <Carousel className='mycarousel' indicators={false} interval={3000}>
                            {this.state.mechanic.map((mechanic, index) =>
                                <Carousel.Item>
                                    <Row>
                                        <Col>
                                            <img className="d-block w-100" src={this.state.mimg[index]} alt='No Image' className='carouselImage' />
                                        </Col>
                                        <Col style={{ marginRight: '50px' }}>
                                            <h6>{mechanic.UserName}</h6>
                                            <h6>{mechanic.status}</h6>
                                            <p className='mechnicDescription'>My Name is {mechanic.Name}, if You Book me for A service my category is {mechanic.Category} and i'm provide {mechanic.sevices} sevices.
                                        i'm professional in my work.</p>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                            )
                            }
                        </Carousel>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default About;