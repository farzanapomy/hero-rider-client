import React, { useState } from 'react';
import { Table } from 'react-bootstrap';


const AllRider = () => {
    const [riders, setRiders] = useState([])
    const [search, setSearch] = useState("");


    // useEffect(() => {
    //     fetch(`https://protected-atoll-65365.herokuapp.com/AllRider`)
    //         .then(res => res.json())
    //         .then(data => setRiders(data))
    // }, [])


    // find by search 
    const handleInputField = (e) => {
        setSearch(e.target.value);
    };

    const handleInputSearch = () => {
        fetch(`https://protected-atoll-65365.herokuapp.com/searchRiders?search=${search}`)
            .then((res) => res.json())
            .then((result) => setRiders(result));

        console.log(search);
    };





    return (
        <div className='container'>
            <h2>Manage all Riders</h2>

            <input onChange={handleInputField} type="text" className="p-2 m-3" />
            <button onClick={handleInputSearch} className="btn btn-primary m-1">
                Search
            </button>


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