import React from 'react';
import background from '../../assets/auth.jpg'
import { Link } from 'react-router';
import RegisterForm from './Components/RegisterForm';
const Register = () => {
    return (
        <div className="w-full">
            {/* Hero Section with Background Image */}
            <div className="relative h-screen">
                <img
                    src={background}
                    alt="Event Banner"
                    className="object-cover bg-center w-full h-full"
                    width={800}
                    height={400}
                />
                <div className="absolute inset-0 bg-black opacity-80"></div>

                <div className="absolute inset-0 flex items-center gap-5 md:gap-48 justify-center text-white flex-col md:flex-row">
                    <div className="mx-5 text-center md:text-left">
                        <h1 className="text-3xl md:text-6xl font-bold mb-4">
                            Plan, Promote & Party. 🎉
                        </h1>
                        <p className="text-sm md:text-lg max-w-md">
                            Welcome to <strong>Evently</strong> – your go-to platform for organizing, discovering, and managing unforgettable events.
                        </p>
                        <p className="mt-4 max-w-md text-sm text-gray-300 mb-8 md:mb-16">
                            Host events, connect with attendees, and make every moment count with seamless planning and real-time updates.
                        </p>
                        <Link
                            to={'/'}
                            className="border px-4 py-2 rounded-lg hover:bg-gray-600 transition w-fit inline-block"
                        >
                            ← Back to Home
                        </Link>
                    </div>

                    {/* Optional: Add login or signup form here */}
                    <RegisterForm/>
                
                </div>
            </div>
        </div>
    );
};

export default Register;