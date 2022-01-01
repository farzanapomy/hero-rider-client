import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'
import './LearnerDriving.css'

const LearnerDriving = () => {
    const { register, handleSubmit } = useForm();
    const { registerUser } = useAuth()
    const navigate = useNavigate()


    const onSubmit = data => {
        // if (data.password != data.password2) {
        //     alert('your password did not match');
        //     return;
        // }
        registerUser(data.email, data.password, data.name, navigate)

        axios.post('https://protected-atoll-65365.herokuapp.com/LearnerDriving', data)
            .then(res => {

                console.log(res);
            })

        console.log(data);

    };



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='register-form'>
                <input
                    {...register("name",
                        { required: true })}
                    placeholder='Enter your full name'
                />
                <input
                    {...register("email",
                        { required: true })}
                    placeholder='Enter your email'
                />
                <input
                    {...register("age",
                        { required: true })}
                    placeholder='Enter your age'
                />
                <input
                    {...register("address", { required: true })}
                    placeholder='Enter Your Address'
                />
                <input
                    {...register("phone",
                        { required: true })}
                    placeholder='Enter your phone number'
                />



                <input
                    {...register("nidFile", { required: true })}
                    placeholder='Drop your NID picture'
                />


                <input
                    {...register("profilePic", { required: true })}
                    placeholder='Drop your Profile picture'
                />
                <select
                    {...register("vehicleType",
                        { required: true })}>
                    <option value="Car">Car</option>
                    <option value="Bike">Bike</option>
                </select>


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


                <input type="submit" />

            </form>


        </div>
    );
};

export default LearnerDriving;