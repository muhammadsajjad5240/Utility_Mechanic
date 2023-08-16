import React, { Component } from 'react';
import './FAQ.css';
import MyNav from '../navbar/navbar';
import { Container, Row, Col } from 'react-bootstrap';
import Faqs from '../../images/Faqs.jfif';
import Footer from '../footer/footer';
class FAQs extends Component {
    render() {
        return (
            <div>
            <div >
                <img src={Faqs} className='Faq_background' />
                <MyNav />
            </div><br />
                <Row className='Faq-header'>
                    <Col xs={12} lg={{ span: 6, offset: 3 }}><h2>Frequently Asked Questions</h2></Col>
                </Row>
                <Container><br/><br/>
                    <Row>
                        <Col xs={12} lg={{ span: 12 }}>
                            <ul>
                                <span className='number'>1</span>
                                <li className='question'>&nbsp;&nbsp;Q: What is Utility Mechanic?</li>
                                <p className='answer'><span className='answer-style'>&nbsp;&nbsp;&nbsp;A:&nbsp;&nbsp;</span> Utility Mechanic is a Platform used for a skilled tradesman such as an Electrician, Plumber, AC Technician, Painter or Carpenter to proivide different service to the public.</p>
                                <span className='number'>2</span>
                                <li className='question'>&nbsp;&nbsp;Q: what services do you exactly provide?</li>
                                <p className='answer'><span className='answer-style'>&nbsp;&nbsp;&nbsp;A:&nbsp;&nbsp;</span> We provide Electricians, Plumbers, and HVAC Technicians. We can also provide Wall Painters, Carpenters, Cleaners (Janitors) and other Technicians to homes and offices. You no longer have to worry about finding a reliable and effective mechanic to do your routine repairs at home or office. We can further provide services related to new construction.</p>
                                <span className='number'>3</span>
                                <li className='question'>&nbsp;&nbsp;Q: Do I need to sign up or require membership?</li>
                                <p className='answer'><span className='answer-style'>&nbsp;&nbsp;&nbsp;A:&nbsp;&nbsp;</span>  No you do not need any kind of membership. Anyone can avail our services which start at Rs. 500 only. You may, however, sign up to our Memberships and receive free monthly visits as well as exclusive discounts on the regular rack rates. Just give us a call and we will give you the details.</p>
                                <span className='number'>4</span>
                                <li className='question'>&nbsp;&nbsp;Q: Why I should I use your services?</li>
                                <p className='answer'><span className='answer-style'>&nbsp;&nbsp;&nbsp;A:&nbsp;&nbsp;</span>Simple! Finding a trained, trustworthy, and reliable mechanic is just not easy these days. We provide handymen who are well-trained, well-equipped, professional, friendly and reliable. We also promise satisfaction, and hence give you a complete peace of mind! We further offer our services at very affordable and competitive rates.</p>
                                <span className='number'>5</span>
                                <li className='question'>&nbsp;&nbsp;Q: What if I am not satisfied?</li>
                                <p className='answer'><span className='answer-style'>&nbsp;&nbsp;&nbsp;A:&nbsp;&nbsp;</span>Your satisfaction is our top priority! Subject to our Terms & Conditions, if in the unlikely event you are not satisfied or if you feel like the job was not properly done, we will send you another handyman to do the work as required. Please note that you can only claim a free return service if you report a problem within 48 hours. Further note, we cannot give a guarantee / warranty on Parts, as their quality is beyond our control.</p>
                                <span className='number'>6</span>
                                <li className='question'>&nbsp;&nbsp;Q: Can I provide you with the materials for the repair?</li>
                                <p className='answer'><span className='answer-style'>&nbsp;&nbsp;&nbsp;A:&nbsp;&nbsp;</span>  Of course! You can buy and provide the material and pay us just for the labour & service fee as described on the “Prices” page. If you would like us to provide the required materials or parts, please note that we may add a handling charge to their (parts) price.</p>
                                <span className='number'>7</span>
                                <li className='question'>&nbsp;&nbsp;Q: Are your prices negotiable?</li>
                                <p className='answer'><span className='answer-style'>&nbsp;&nbsp;&nbsp;A:&nbsp;&nbsp;</span> Sorry, all our prices are fixed for small jobs. Our Prices are very affordable and competitive (click here to see our rates). Only our Members can avail exclusive discounts. If however, you have a large project for us, such as works related to construction and structural changes, we can consider offering you special rates on “contract” basis. Contact us to discuss this further.</p>
                                <span className='number'>8</span>
                                <li className='question'>&nbsp;&nbsp;Q: How do I pay with cash?</li>
                                <p className='answer'><span className='answer-style'>&nbsp;&nbsp;&nbsp;A:&nbsp;&nbsp;</span> You can pay our handyman (or technician) in cash, when he completes the job at your premises, and provides you with an official invoice.</p>
                                <span className='number'>9</span>
                                <li className='question'>&nbsp;&nbsp;Q: How long is the wait between the service request & the mechanic's arrival?</li>
                                <p className='answer'><span className='answer-style'>&nbsp;&nbsp;&nbsp;A:&nbsp;&nbsp;</span> We aim to provide you a handyman as soon as possible. Usually the handyman will arrive to you within 2 hours unless there are extraordinary circumstances*.</p>
                                <span className='number'>10</span>
                                <li className='question'>&nbsp;&nbsp;Q: Can I request your workmen to do my other works?</li>
                                <p className='answer'><span className='answer-style'>&nbsp;&nbsp;&nbsp;A:&nbsp;&nbsp;</span> No you may not do this. If you require any work beyond the agreed scope, please call our helpline to discuss it further.</p>
                                <span className='number'>11</span>
                                <li className='question'>&nbsp;&nbsp;Q: What do I need to provide?</li>
                                <p className='answer'><span className='answer-style'>&nbsp;&nbsp;&nbsp;A:&nbsp;&nbsp;</span> When you call us, let us know roughly what work needs to be done. Leave us your name, address, phone number and tell our call centre agent a convenient time for our handyman to arrive at the premises.</p>
                                <span className='number'>12</span>
                                <li className='question'>&nbsp;&nbsp;Q: How do I make payments?</li>
                                <p className='answer'><span className='answer-style'>&nbsp;&nbsp;&nbsp;A:&nbsp;&nbsp;</span> We accept cash and cheque payments. All cheques are to be made out to : THE HANDYMAN PRIVATE LIMITED. Our Residential and Corporate Member clients can benefit exclusively from our monthly billing and are not required to make payments immediately after each job.</p>
                                <span className='number'>13</span>
                                <li className='question'>&nbsp;&nbsp;Q: What are your Timings / Working Hours?</li>
                                <p className='answer'><span className='answer-style'>&nbsp;&nbsp;&nbsp;A:&nbsp;&nbsp;</span> We are open 7 Days a Week (Monday to Sunday) from 9AM to 6PM. We can also work beyond these hours (overtime) at extra charges as detailed on our prices section.</p>
                                <span className='number'>14</span>
                                <li className='question'>&nbsp;&nbsp;Q: Q: How do I contact you?</li>
                                <p className='answer'><span className='answer-style'>&nbsp;&nbsp;&nbsp;A:&nbsp;&nbsp;</span> We will be glad to hear from you! Please call us at: 0311-0749045 or 0316-0736667 or you may visit our Contact us page to get in touch. You may also email us on utilitymechanic.com</p>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}
export default FAQs;






//<----------------------------------->

//<----------------------->

