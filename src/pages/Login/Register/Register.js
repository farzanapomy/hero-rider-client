import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth'
import './Register.css'

const Register = () => {
    const { register, handleSubmit } = useForm();
    const { registerUser } = useAuth()

    const onSubmit = data => {
        // if (data.password !== data.password2) {
        //     alert('your password did not match');
        //     return;
        // }
        registerUser(data.email, data.password, data.name)

        console.log(data)
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='register-form'>
                <input
                    {...register("name",
                        { required: true })}
                    placeholder='Enter your name'
                />
                <input
                    {...register("email",
                        { required: true })}
                    placeholder='Enter your email'
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

                <input type="submit" />
            </form>


        </div>
    );
};

export default Register;