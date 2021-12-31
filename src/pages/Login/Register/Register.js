import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'
import useFirebase from '../../../hooks/useFirebase';
import './Register.css'

const Register = () => {
    const { register, handleSubmit } = useForm();
    const { registerUser } = useAuth()
    // const navigate = useNavigate()
    
    const onSubmit = data => {
        registerUser(data.email, data.password)

        console.log(data)
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='register-form'>
                <input
                    placeholder='Enter you name'
                    type='text'
                    name='text'
                    {...register("name")}
                    className='border-0 '

                />

                <input
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    {...register("email")}
                />

                <input
                    placeholder='Enter your password'
                    name='password'
                    type="password"
                    {...register("password")}
                />
                <input type="submit" />
            </form>
            

        </div>
    );
};

export default Register;