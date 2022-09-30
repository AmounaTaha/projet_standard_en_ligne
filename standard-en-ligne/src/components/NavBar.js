import React from "react"
import TopBar from "../css/NavBar.css"
// import { NavLink } from 'react-router-dom'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import{FaAccessibleIcon} from 'react-icons/fa';


const NavBar = () => (
    <div id="Left_section">
        <h1 className="title">Logo</h1>
        <div className="nav">
            <ul>
                <div><li>Mes appels</li></div>
                <div><li>Configuration</li></div>
                <div><li>Compte</li></div>
                <div><li>Boutique</li></div>
                <div className="sign_out"><li>Déconnexion</li></div>
            </ul>
            {/* <NavLink to="/" className="btn btn-outline-dark bg-light"><FaAccessibleIcon/>Mes appels</NavLink>
            <NavLink to="/completed" className="btn btn-outline-dark bg-light"><FaAccessibleIcon/>Configuration</NavLink>
            <NavLink to="/add-task" className="btn btn-outline-dark bg-light"><FaAccessibleIcon/>Compte</NavLink>
            <NavLink to="/add-task" className="btn btn-outline-dark bg-light"><FaAccessibleIcon/>Boutique</NavLink> */}
        </div>
    </div>
)

export default NavBar;