import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Rider.css'


const Rider = ({ rider }) => {
    const { name,
        email,
        age,
        address,
        phone,
        area,
        licenceFile,
        nidFile,
        profilePic,
        carName,
        model,
        namePalate,
        vehicleType } = rider;
    console.log(nidFile);
    return (
        <Container>

            <Row>
                <Col className='profile-section'>
                    <h6 >{name}</h6>
                    <img src={profilePic} alt="" />
                </Col>
                <Col>
                    <h2>{vehicleType}</h2>
                </Col>
            </Row>

        </Container>
    );
};

export default Rider;