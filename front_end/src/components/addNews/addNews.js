import React, { Component } from 'react';
import axios from 'axios';
import {Container, Table, Row, Col, Form, ListGroup, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
class AddNews extends Component{
    constructor(props){
        super(props);
        this.onChangeNewsId = this.onChangeNewsId.bind();
        this.onChangeNewsTitle = this.onChangeNewsTitle.bind();
        this.onChangeNewsDescription = this.onChangeNewsDescription.bind();
        this.onsubmit = this.onsubmit.bind();
        this.state={
            newsId: new Date().getMilliseconds(),
            newsTitle:'',
            newsDescription:''
        }
        
    }
    onChangeNewsId = (e) =>{
        this.setState({newsId: e.target.value});
    }
    onChangeNewsTitle = (e) =>{
        this.setState({newsTitle: e.target.value});
    }
    onChangeNewsDescription = (e) =>{
        this.setState({newsDescription: e.target.value});
    }
    onsubmit = (e) =>{
        alert(this.state.newsId,)
        e.preventDefault();
        const latestNews = {
            newsId: this.state.newsId,
            newsTitle: this.state.newsTitle,
            newsDescription: this.state.newsDescription
        }
        axios.post('/api/addnews', latestNews)
            .then(res => console.log(res.data));
        this.setState({
            newsId: new Date().getMilliseconds(),
            newsTitle: '',
            newsDescription: ''
        })
        let newspattern = /^[a-zA-Z]+/;
        
        let newsTitle = document.getElementById('news_title').value;
        let newsDescription = document.getElementById('news_desc').value;
        if(!newspattern.test(newsTitle)){
        document.getElementById('news_title').style.border = '1px solid red';
            
        }
        else if(newsDescription === ''){
        document.getElementById('news_desc').style.border = '1px solid red';
            
        }
        else{
            
        }
    }
    titleFocus = () =>{
        document.getElementById('news_title').style.border = 'none';
        
    }
    descriptionFocus = (e) =>{
        document.getElementById('news_desc').style.border = 'none';
        
    }
    render(){
        return(
            <div>
                <Container>
                    <Row className='admin-panel'>
                        <Col xs={12} lg={{ span: 4, offset: 3 }}><br /><br />
                            <form>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label>News ID:</Form.Label>
                                    <Form.Control type="text" id='news_id' value={this.state.newsId} readOnly={true} onChange={this.onChangeNewsId} />
                                </Form.Group>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label>News Title:</Form.Label>
                                    <Form.Control type="text" id='news_title' placeholder="Enter News Title" value={this.state.newsTitle} onFocus={this.titleFocus} onChange={this.onChangeNewsTitle} />
                                </Form.Group>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label>New Description</Form.Label>
                                    <Form.Control as="textarea" id='news_desc' placeholder="Enter News Description" value={this.state.newsDescription} onFocus={this.descriptionFocus} onChange={this.onChangeNewsDescription} />
                                </Form.Group>
                            </form>
                            <Button type='button' variant="primary" size="sm" className='mechanicInfo-update-btn' type='submit' onClick={this.onsubmit}>ADD</Button>
                        </Col>

                    </Row>
                    <Row>
                        <Col xs={12} lg={{ span: 10, offset: 1 }}><br /><br />
                            <Table responsive striped bordered>
                                <thead>
                                    <tr className='table-heading'>
                                        <th>New ID:</th>
                                        <th>News Title</th>
                                        <th>News Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        
                                    </tr>

                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default AddNews;