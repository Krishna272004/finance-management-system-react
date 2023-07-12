import React from 'react';
import "./nav.css";
import { NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/Add">Add</NavLink>
                </li>
            </ul>
        </nav>
    )
}
