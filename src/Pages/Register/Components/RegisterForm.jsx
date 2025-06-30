import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

const RegisterForm = () => {
    const {
        register,
        handleSubmit,

    } = useForm()
    const onSubmit = async (data) => {
        try {
            const res = await axios.post('http://localhost:5000/api/user', data )
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        console.table(data)
    }
    return (
        <div>

            <div className="bg-white/10 min-w-md backdrop-blur-md p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="text-white block mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your full name"
                            {...register("name", { required: true })}
                            className="w-full p-3 rounded-md bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"

                        />
                    </div>

                    <div>
                        <label className="text-white block mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            className="w-full p-3 rounded-md bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"

                            {...register("email", { required: true })}
                        />
                    </div>

                    <div>
                        <label className="text-white block mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Your password"
                            className="w-full p-3 rounded-md bg-white/70 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"

                            {...register("password", { required: true })}
                        />
                    </div>

                    <div>
                        <label className="text-white block mb-1">Photo URL</label>
                        <input
                            type="url"
                            name="photoURL"
                            placeholder="https://your-photo-url.jpg"
                            className="w-full p-3 rounded-md bg-white/70 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"

                            {...register("photoURL", { required: true })}

                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition font-semibold"
                    >
                        Submit
                    </button>
                </form>
                <p className='py-2'>Don't Have any account <Link to={`/auth/login`} className='text-blue-500 underline cursor-pointer'>Login here</Link></p>
            </div>
        </div>
    );
};

export default RegisterForm;