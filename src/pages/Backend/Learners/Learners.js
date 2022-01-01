import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Learner from '../Learner/Learner';

const Learners = () => {
    const { user } = useAuth()
    const [Learners, setLearners] = useState([])
    
    useEffect(() => {
        const url = `https://protected-atoll-65365.herokuapp.com/Learners/${user.email}`
            fetch(url)
            .then(res => res.json())
            .then(data => setLearners(data))
    }, [user.email])
    return (
        <div>
            <h1 className='my-5'>Hello learner</h1>
            {
                Learners.map(learner=> <Learner
                    key={learner._id}
                    learner={learner}
                ></Learner>)
            }
        </div>
    );
};

export default Learners;