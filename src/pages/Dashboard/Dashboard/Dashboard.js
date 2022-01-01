import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './DashBoard.css'

const DashBoard = () => {
    const { admin } = useAuth()
    console.log(admin);

    return (
        <div className="container my-5">
            <div className="dashboard-container">
                <div className="row">
                    <div className="col-md-3 ">

                        <h5 style={{ margin: "15px", padding: "15px", textDecoration: "" }}>User Dashboard</h5>

                        {admin &&

                            <div>

                                <Link to={`/dashboard/makeAdmin`}>
                                    <li className="dashboard-menu mt-5">MakeAdmin</li>
                                </Link>
                                <Link to={`/dashboard/AllRider`}>
                                    <li className="dashboard-menu mt-5">All Riders</li>
                                </Link>
                                <Link to={`/dashboard/AllLearners`}>
                                    <li className="dashboard-menu mt-5">All Learners</li>
                                </Link>
                            </div>

                        }

                    </div>
                    <div className="col-md-9 dashboard">
                        <Outlet></Outlet>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default DashBoard;