import React from 'react';
import LearnerDriving from '../../Backend/LearnerDriving/LearnerDriving';
import Riders from '../../Backend/RidersForm/RidersForm';
import img from '../../../images/download.jpg'
const Home = () => {
    const bikerBanner = {
        background: `url(${img})`,
        backgroundColor: 'rgba(45, 58, 74, 0.9)',
        backgroundBlendMode: 'darken, luminosity',
        height: '100px',
        marginTop: 175
    }
    return (
        <div style={bikerBanner}>
            <img src={img} alt="" />
            {/* <Riders></Riders>
            <LearnerDriving></LearnerDriving> */}
        </div>
    );
};

export default Home;