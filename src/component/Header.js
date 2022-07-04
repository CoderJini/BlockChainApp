import styles from "./Header.module.css";
import {useState} from "react";
import dummy from "../db/dummy.json";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"

const Header = () =>{

    return (
        <header className="navbar navbar-inverse">
            <Link to="/" className="navbar-brand">Block Chain App</Link>
            <ul className="nav navbar-nav navbar-left">
                {
                    dummy.mainManu.map(mainManu=>(
                        <li key={mainManu.id}><Link to={mainManu.router}>{mainManu.name}</Link></li>
                    ))
                }
            </ul>
        </header>
    )
}

export default Header;