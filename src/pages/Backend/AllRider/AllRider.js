import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const AllRider = () => {
    const [riders, setRiders] = useState([])

    useEffect(() => {
        fetch(`https://protected-atoll-65365.herokuapp.com/AllRider`)
            .then(res => res.json())
            .then(data => setRiders(data))
    }, [])
    return (
        <div className='container'>
            <h2>Manage all Orders</h2>

            <Table hover variant="dark" responsive>
                <thead

                >
                    <tr>
                        <th>Index</th>
                        <th>Rider Name</th>
                        <th>Area</th>
                        <th>Vehicle Name</th>
                        <th>Contact</th>
                    </tr>
                </thead>

                {riders.map((rider, index) =>
                    <tbody
                        key={rider._id}
                    >
                        <tr>
                            <td>{index}</td>
                            <td>{rider.name}</td>
                            <td>{rider.area}</td>
                            <td>{rider.vehicleType}</td>
                            <td>
                               {rider.phone}
                            </td>
                        </tr>

                    </tbody>
                )}

            </Table>

        </div>
    );
};

export default AllRider;