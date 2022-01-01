import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Login.css'

const Login = () => {
    const { logInUser, error } = useAuth()
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        logInUser(data.email, data.password, navigate)

        console.log(data)
    };

  

    return (
        <div>
            <h2>Please Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
                <input {...register("email")} />
                <input {...register("password")} />
                <input type="submit" />
            </form>
            <div>
                <h6>New User ??
                    <Link to='/RidersForm'> Go to register.
                    </Link>
                </h6>
            </div>
            {
                error && <p>{error}</p>
            }
           
        </div>
    );
};

export default Login;