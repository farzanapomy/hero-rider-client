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
                    {...register("area", { required: true })}
                    placeholder='Confirm your area'
                />
                <p>Drop your driving licence picture</p>
                {/* <input
                    type="file"
                    name="picture"
                />
                <p>Drop your NID picture</p>
                <input
                    type="file"
                    name="picture"
                />

                <p>Drop your Profile picture</p>
                <input
                    type="file"
                    name="picture"
                /> */}

                <h2>Now give your car information </h2>
                <input
                    {...register("carName", { required: true })}
                    placeholder='Enter your car Name'
                />
                <input
                    {...register("model,", { required: true })}
                    placeholder='Enter car model'
                />
                <input
                    {...register("namePalate,", { required: true })}
                    placeholder='Enter name palate'
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

export default Register;