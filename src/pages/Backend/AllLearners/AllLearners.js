import React, {  useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const AllLearners = () => {
    const [learners, setLearners] = useState([])
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(`https://protected-atoll-65365.herokuapp.com/LearnerDriving`)
            .then(res => res.json())
            .then(data => setLearners(data.result))
    }, [])

    const handleInputField = (e) => {
        setSearch(e.target.value);
    };

    const handleInputSearch = () => {
        fetch(`https://protected-atoll-65365.herokuapp.com/searchLearners?search=${search}`)
            .then((res) => res.json())
            .then((result) => setLearners(result));

        console.log(search);
    };



    return (
        <div className='container'>
            <h2>Manage all Learner</h2>

            <input onChange={handleInputField} type="text" className="p-2 m-3" />
            <button onClick={handleInputSearch} className="btn btn-primary m-1">
                Search
            </button>

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