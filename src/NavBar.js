import css from "./App.css";
import React from "react";

const NavBar= () => {
    return <div className={css.menu}>
            <div>
                <img src="https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275__340.jpg"/>
            </div>
            <div>
                <a>My friends</a>
            </div>
            <div>
                <a>My news</a>
            </div>
            <div>
                <a>My messages</a>
            </div>
    </div>
}

export default NavBar;