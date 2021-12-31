import React, { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import './Riders.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';


const Riders = () => {
    const { user, error } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const onSubmit = data => {

        axios.post('http://localhost:5000/riders', data)
            .then(res => {


            })

        navigate('/bikerUser')
        console.log(data)

    };




    return (
        <div>
            <h2>{error}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='register-form'>
                <input
                    {...register("fullName",
                        { required: true })}
                    defaultValue={user?.displayName}
                />
                <input
                    {...register("email",
                        { required: true })}
                    defaultValue={user?.email}
                />
                <input
                    {...register("age",
                        { required: true })}
                    placeholder='Enter your age'
                />
                <input
                    {...register("Phone",
                        { required: true })}
                    placeholder='Enter your phone number'
                />
                <input
                    {...register("password",
                        { required: true })}
                    type="password"
                    name="password"
                    placeholder='Enter your password'
                />
                <input
                    {...register("password",
                        { required: true })}
                    type="password"
                    name="password2"
                    placeholder='Confirm password'
                />
                 {errors.password && <p className='text-danger'>Password did not match</p>}

                <input
                    {...register("address", { required: true })}
                    placeholder='Enter Your Address'
                />
                <label>Drop Your licence picture</label>
                <input

                    type="file"
                    name="picture"
                    placeholder='driving licence picture'
                />
                <select
                    {...register("car information",
                        { required: true })}>
                    <option value="female">car Name</option>
                    <option value="male">Car Model</option>
                    <option value="other">Name Palate</option>
                </select>
                <input type="submit" className='submit' />
            </form>

        </div>
    );
};

export default Riders;