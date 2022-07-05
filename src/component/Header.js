import React, { Component, Fragment, useState } from 'react';
import styles from "./Header.module.scss";
import dummy from "../db/dummy.json";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import BlockNumber from "./BlockNumber"

const Header = () =>{

    return (
        <Fragment>
            <header className="navbar navbar-inverse">
                <div className="container-fluid">
                    <Link to="/"><img alt="logo" className="navbar-left logo" src="./DreamLogo_White.ico"></img></Link>
                    <ul className="nav navbar-nav navbar-left">
                        {
                            dummy.mainManu.map(function(mainManu){
                                if(mainManu.type === "dropdown"){
                                    return (
                                        <li key={mainManu.id} className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">{mainManu.name}<span className="caret"></span></a>
                                                <ul className="dropdown-menu" role="menu">
                                                {
                                                    mainManu.content.map(function(content){
                                                        return <li key={content.id}><Link to={content.router}>{content.name}</Link></li>
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    )
                                }else{
                                    return <li key={mainManu.id}><Link to={mainManu.router}>{mainManu.name}</Link></li>
                                }
                            })
                        }
                    </ul>
                    <BlockNumber />
                </div>
            </header>
        </Fragment>
    )
}

export default Header;