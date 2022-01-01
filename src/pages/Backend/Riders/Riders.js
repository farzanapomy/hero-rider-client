import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Rider from '../Rider/Rider';

const Riders = () => {
    const { user } = useAuth()
    const [riders, setRiders] = useState([])
    
    useEffect(() => {
        const url = `https://protected-atoll-65365.herokuapp.com/riders/${user.email}`
            fetch(url)
            .then(res => res.json())
            .then(data => setRiders(data))
    }, [user.email])
    return (
        <div>
            <h1 className='my-5'>Hello Rider</h1>
            {
                riders.map(rider=> <Rider
                    key={rider._id}
                    rider={rider}
                ></Rider>)
            }
        </div>
    );
};

export default Riders;