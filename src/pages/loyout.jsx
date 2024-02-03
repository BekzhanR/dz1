import React from 'react';
import Navbar from "../components/navbar.jsx";
import {Outlet} from "react-router-dom";

const Loyout = () => {

    return (
        <div>
            <Navbar/>
            <hr/>
            <Outlet/>
            <footer><span>Bekzhan</span></footer>
        </div>
    );
};

export default Loyout;