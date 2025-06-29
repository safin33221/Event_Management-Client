import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <nav>
                <h1>This is Navbar</h1>
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