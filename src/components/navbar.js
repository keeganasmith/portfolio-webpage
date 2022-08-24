import React from 'react';
function Navbar(props){
    return (
        <nav className = "navbar">
            <a href = "/" className = "title">Keegan Smith</a>
            <ul>
                <li>
                    <a href = "/about">About</a>
                </li>
                <li>
                    <a href = "/projects">Projects</a>
                </li>
                <li>
                    <a href = "/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;