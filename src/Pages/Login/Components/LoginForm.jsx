import React from 'react';
import { useState } from 'react';

const LoginForm = () => {
    const handleSubmit = () => {

    }
    return (
        <div>

            <div className="bg-white/10 min-w-md backdrop-blur-md p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Login Now</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    

                    <div>
                        <label className="text-white block mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"

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
            </div>
        </div>
    );
};

export default LoginForm;