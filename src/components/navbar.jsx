import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "../pages/app.module.sass"
const active=({isActive})=>isActive ? "active":""
const Navbar = () => {

    return (
        <div className={classes.nav}>
            <nav>
                <ul>
                    <li>
                        <NavLink className={active} to="watch">Watch</NavLink>
                    </li>
                    <li>
                        <NavLink className={active} to="create">Create</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;