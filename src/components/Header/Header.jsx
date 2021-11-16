import React from "react";
import {HeaderRoot} from "./Header.ui"

function Header({ title }) {
    return <header id="AppHeader">
        <HeaderRoot className="title">{title}</HeaderRoot>
    </header>
}

export default Header