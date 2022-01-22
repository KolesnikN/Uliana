import css from "./Navbar.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return <div className={css.navbar}>
        <div className={css.item}>
            <NavLink to='/Information'>Profile</NavLink>
        </div>
        <div className={css.item}>
            <a>Friends</a>
        </div>
        <div className={css.item}>
            <a>News</a>
        </div>
        <div className={css.item}>
            <NavLink to='/MayMessages'>Messages</NavLink>
        </div>
    </div>
}

export default NavBar;