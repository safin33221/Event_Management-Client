import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

import { Link } from 'react-router';

const LoginForm = () => {
    const {
        register,
        handleSubmit,

    } = useForm()
    const onSubmit = async (data) => {
        try {
            const res = await axios.post('http://localhost:5000/api/login', data)
            localStorage.setItem("token", res.data.token);
           
        } catch (error) {
       
            toast.error(error.response.data.message)
        }
    }
    return (
        <div>

            <div className="bg-white/10 min-w-md backdrop-blur-md p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Login Now</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">


                    <div>
                        <label className="text-white block mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            {...register("email", { required: true })}
                            className="w-full p-3 rounded-md bg-white/70 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-white block mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Your password"
                            {...register("password", { required: true })}
                            className="w-full p-3 rounded-md bg-white/70 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>



                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition font-semibold"
                    >
                        Login
                    </button>
                </form>
                <p className='py-2'>Don't Have any account <Link to={`/auth/register`} className='text-blue-500 underline cursor-pointer'>Register here</Link></p>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default LoginForm;