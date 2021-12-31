import React, { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import './Riders.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Riders = () => {
    const { user } = useAuth()
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const onSubmit = data => {

        axios.post('http://localhost:5000/riders', data)
            .then(res =>

                console.log(data))
        navigate('/BikerUser')
        console.log(data)
    };




    return (
        <div>
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
                    {...register("address", { required: true })}
                    placeholder='Enter Your Address'
                />
                <label>Enter your driving licence picture</label>
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