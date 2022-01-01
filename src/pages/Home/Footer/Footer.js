import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import footer1 from '../../../images/bike1.jpg'
import footer2 from '../../../images/bike2.jpg'
import footer3 from '../../../images/bike3.jpg'
import footer4 from '../../../images/bike4.jpg'

const Footer = () => {
    return (
        <div className='footer-container'>
            <Container >
                <Row>
                    <Col sm={4} className='text-right'>
                        <h3 >About Us</h3>
                    </Col>
                    <Col sm={4}>
                        <h3>
                            Latest News
                        </h3>
                    </Col>
                    <Col sm={4}>
                        <h3>
                            Features
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <p>
                        We lead by example Ariel Rider Ebikes has always been a passion project of me and my brother. 2014 was a year of both triumphs and tribulations for us here ...
                        </p>


                        <p><i className="far fa-envelope"></i> {" "} herorider@gmail.com</p>
                        <p><i className="fas fa-phone-square-alt"></i> {" "} +0011221802</p>
                        <div className='footer-input'>
                            <input type="search" name="" id="" /> <br />
                            <button>Subscribe</button>
                        </div>
                    </Col>
                    <Col sm className='latest-section'>

                        <p>
                        here are rumors of Marvel Studios looking to cast a new actor for the next Ghost Rider, and fans of The Walking Dead have been pushing for ...
                        </p>
                        <i className="fas fa-map-marker-alt"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-facebook"></i>
                    </Col>
                    <Col sm className='feature-img' >
                        <Row className="" sm={4} >
                            <Col >
                                <img  src={footer1} alt="" />
                            </Col>
                            <Col >
                                <img  src={footer2} alt="" />
                            </Col>

                        </Row>
                        <Row className="" sm={4}>

                            <Col >
                                <img  src={footer3} alt="" />
                            </Col>
                            <Col >
                                <img  src={footer4} alt="" />
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
            <div className='copyright'>
                <p><i className="fas fa-copyright"></i> Copyright by Farzana Pomy 2022</p>

            </div>
        </div>
    );
};

export default Footer;