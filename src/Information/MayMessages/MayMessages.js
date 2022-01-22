import React from 'react';
import css from './MayMessages.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./Dialogs/Dialogs";
import Message from "./Message/Message";

let dialogData = [
    {id: 1, name: 'Nik'},
    {id: 2, name: 'Nikolai'},
    {id: 3, name: 'Veronika'},
]

let messageData = [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'How are you feeling?'},
]

let dialogElement = dialogData
    .map (d => <DialogItem name={d.name} id={d.id}/>);

let messageElement = messageData
    .map (m => <Message message={m.message}/>);

const MayMessages = () => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>
                <div className={css.dialog}>
                    { dialogElement }
                </div>
            </div>
            <div className={css.messages}>
                { messageElement }
            </div>
        </div>
    )
}

export default MayMessages
