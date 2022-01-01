import React, { useEffect, useState } from 'react';

const AllRider = () => {
    const [riders, setRiders] = useState([])

    useEffect(() => {
        fetch(`https://protected-atoll-65365.herokuapp.com/AllRider`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default AllRider;