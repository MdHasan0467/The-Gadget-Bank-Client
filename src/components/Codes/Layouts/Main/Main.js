import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import NavBar from '../../Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Main;