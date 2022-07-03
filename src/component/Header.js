import styles from "./Header.module.css";
import {useState} from "react";

const HeaderComponent = () =>{

    return (
        <header className="navbar navbar-inverse">
            <a class="navbar-brand">Block Chain App</a>
            <ul class="nav navbar-nav navbar-left">
                <li><a href="#">대시보드</a></li>
                <li><a href="#">페이지1</a></li>
                <li><a href="#">설정</a></li>
            </ul>
        </header>
    )
}

export default HeaderComponent;