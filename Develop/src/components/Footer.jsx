import React from "react";

export default function Header() {
    return (
        <header>
            <h1>Developer's Name</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active">About Me</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/resume" activeClassName="active">Resume</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}