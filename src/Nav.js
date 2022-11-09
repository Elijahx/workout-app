import React from "react";
import './App.css';
import {Link, useMatch, useResolvedPath} from "react-router-dom";

function Nav() {
    return (
        <nav className="nav">
            <Link to="/home" className="site-logo">LOGO</Link>
            <ul className="nav-links">
                <CustomLink to="home">Home</CustomLink>
                <CustomLink to="calendar">Calendar</CustomLink>
                <CustomLink to="fitness">Fitness</CustomLink>
                <CustomLink to="pricing">Pricing</CustomLink>
                <CustomLink to="about-us">About</CustomLink>
                <CustomLink to="login" className="button">Login</CustomLink>
            </ul>
        </nav>
    );
    }

    // Marks respective page as active
    function CustomLink({to, children, ...props}) {
        const resolvedPath = useResolvedPath(to);
        const isActive = useMatch({path: resolvedPath.pathname, end: true});
        return (
            <li className={isActive ? "active" : ""}>
                <Link to={to}{...props}>{children}</Link>
            </li>
        )
    }

export default Nav;
