import React from 'react';
import css from './App.css';

const Nav = () => {
    return <div className={css.content}>
        <div>
            <a>Photo + information</a>
        </div>
        <div>
            <a>My posts</a>
        </div>
        <div>
            <a>New posts</a>
        </div>
    </div>
}

export default Nav;