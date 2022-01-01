import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Rider = () => {
    const { user } = useAuth()
    const [rider, setRider] = useState([])
    
    useEffect(() => {
        const url = `https://protected-atoll-65365.herokuapp.com/riders/${user.email}`
            .then(res => res.json())
            .then(data => console.log(data))
    }, [user.email])
    return (
        <div>

        </div>
    );
};

export default Rider;