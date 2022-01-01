import React, { useEffect, useState } from 'react';

const AllLearners = () => {
    const [learners, setLearners] = useState([])

    useEffect(() => {
        fetch(`https://protected-atoll-65365.herokuapp.com/LearnerDriving`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default AllLearners;