import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const AllLearners = () => {
    const [learners, setLearners] = useState([])

    useEffect(() => {
        fetch(`https://protected-atoll-65365.herokuapp.com/LearnerDriving`)
            .then(res => res.json())
            .then(data => setLearners(data))
    }, [])
    return (
        <div className='container'>
            <h2>Manage all Orders</h2>

            <Table hover variant="dark" responsive>
                <thead

                >
                    <tr>
                        <th>Index</th>
                        <th>learner Name</th>
                        <th>Area</th>
                        <th>Vehicle Name</th>
                        <th>Contact</th>
                    </tr>
                </thead>

                {learners.map((learner, index) =>
                    <tbody
                        key={learner._id}
                    >
                        <tr>
                            <td>{index}</td>
                            <td>{learner.name}</td>
                            <td>{learner.area}</td>
                            <td>{learner.vehicleType}</td>
                            <td>
                               {learner.phone}
                            </td>
                        </tr>

                    </tbody>
                )}

            </Table>

        </div>
    );
};

export default AllLearners;