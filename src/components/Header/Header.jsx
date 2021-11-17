import React from "react";
import {HeaderRoot, Li, Logo} from "./Header.ui"
import {
    Link
  } from "react-router-dom";

function Header() {
    return <nav id="AppHeader">
        <HeaderRoot className="title">
            <ul>
                <Li><Link to="/">News Feed</Link></Li>
                <Logo>Tik-Tuk</Logo>
                <Li><Link to="/about">About Me</Link></Li>
            </ul>
        </HeaderRoot>
    </nav>
}

export default Header