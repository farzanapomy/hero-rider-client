import React from 'react';
import LearnerServices from '../../Backend/LearnerServices/LearnerServices';
import Riders from '../../Backend/Riders/Riders';

const Home = () => {
    return (
        <div>
            <h2>this is home</h2>
            <Riders></Riders>
            <LearnerServices></LearnerServices>
        </div>
    );
};

export default Home;