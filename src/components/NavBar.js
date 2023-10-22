import React from 'react';
import { NavLink } from 'react-router-dom';


export function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg py-0">
            <div className="container-fluid">
                <a className="navbar-brand" href="">Dose</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink aria-label="My Pillbox Page" className="nav-link" to="/mypillbox">My Pillbox</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink aria-label="Search Page" className="nav-link" to="/search">Search</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink aria-label="Upload Meds Page" className="nav-link" to="/upload">Upload Meds</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink aria-label="Reorganize Page" className="nav-link" to="/reorganize">Reorganize</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink aria-label="Login Page" className="nav-link" to="/">Sign in</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}