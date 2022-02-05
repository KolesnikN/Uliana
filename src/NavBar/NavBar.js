import css from './Navbar.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className={css.navbar}>
            <div className={css.item}>
                <NavLink to='/information'>Profile</NavLink>
            </div>
            <div className={css.item}>
                <a>Friends</a>
            </div>
            <div className={css.item}>
                <a>News</a>
            </div>
            <div className={css.item}>
                <NavLink to='/maymessages'>Messages</NavLink>
            </div>
        </div>
    );
};

export default NavBar;
