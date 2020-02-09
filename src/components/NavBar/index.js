import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg text-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Motivate Me</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/dashboard" className={window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}
                        >Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/task-bank" className={window.location.pathname === "/task-bank" ? "nav-link active" : "nav-link"}
                        > Task-Bank</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/timer" className={window.location.pathname === "/timer" ? "nav-link active" : "nav-link"}
                        >Pomodoro Timer</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/stats" className={window.location.pathname === "/stats" ? "nav-link active" : "nav-link"}
                        >User Stats</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;