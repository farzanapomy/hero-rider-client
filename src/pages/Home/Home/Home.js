import React from 'react';
import LearnerDriving from '../../Backend/LearnerDriving/LearnerDriving';
import Riders from '../../Backend/RidersForm/RidersForm';

const Home = () => {
    return (
        <div>
            <Riders></Riders>
            <LearnerDriving></LearnerDriving>
        </div>
    );
};

export default Home;