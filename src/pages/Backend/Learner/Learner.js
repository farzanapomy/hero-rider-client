import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import './Rider.css'


const Learner = ({ learner }) => {
    const { name,
        email,
        age,
        address,
        phone,
        area,
        licenseFile,
        nidFile,
        profilePic,
        carName,
        model,
        namePalate,
        vehicleType } = learner;
    return (
        <Container>

            <Row>
                <Col className='profile-section'>
                    <img src={profilePic} alt="" />
                    <h6>{name}</h6>
                    <p>Age: {age}</p>
                    <p>Email: {email}</p>
                    <p>Phone number: +88 {phone}</p>
                    <p>Address : {address}</p>
                    <p>Riding area : {area}</p>
                </Col>
                <Col className='details-info'>
                    <h2>Your Riding details</h2>
                    <p>Vehicle Type: {vehicleType}</p>
                    <p>Car Name: {carName}</p>
                    <br />
                    <h6>Detail information Images</h6>
                    <p>Car Model: {model}</p>
                    <p>Car Name Palate: {namePalate}</p>
                    <img src={licenseFile} alt="" />
                    <img src={nidFile} alt="" />
                </Col>
            </Row>

        </Container>
    );
};

export default Learner;