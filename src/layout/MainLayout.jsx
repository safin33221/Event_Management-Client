import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>
                <h1>This is Footer</h1>
            </footer>
        </div>
    );
};

export default MainLayout;