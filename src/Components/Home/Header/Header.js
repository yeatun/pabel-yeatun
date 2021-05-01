import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div collapse="text-white">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <NavLink exact activeClassName="active" to="/" className="navbar-brand nav-logo">YEATUN</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mono-text">
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/home" className="nav-link navigation-item px-3">Home<span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/about" className="nav-link navigation-item px-3">About<span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/projects" className="nav-link navigation-item px-3" >Projects<span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/blog" className="nav-link navigation-item px-3" >Blog<span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/contact" className="nav-link navigation-item px-3 pr-md-4" >Contact<span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item">
                            <a target="_blank" rel="noopener noreferrer" className="nav-link navigation-item resume px-3 mt-2 mt-md-0 d-inline-block" href="https://drive.google.com/file/d/1M6LrpbxuECijETII6UJIgkKrsEGrgLpX/view?usp=sharing">Resume<span className="sr-only"></span></a>
                        </li>

                    </ul>
                </div>
            </nav>

        </div>
    );
};

export default Header;