import React from 'react';
import LearnerServices from '../../Backend/LearnerServices/LearnerServices';
import Riders from '../../Backend/RidersForm/RidersForm';

const Home = () => {
    return (
        <div>
            <Riders></Riders>
            <LearnerServices></LearnerServices>
        </div>
    );
};

export default Home;