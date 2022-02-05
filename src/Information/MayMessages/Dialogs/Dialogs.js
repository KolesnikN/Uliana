import React from 'react';
import css from './../MayMessages.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = props => {
    let path = '/mayMessages/' + props.id;
    return (
        <div className={css.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;
