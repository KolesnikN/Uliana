import React from 'react';
import css from './MayMessages.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./Dialogs/Dialogs";
import Message from "./Message/Message";



const MayMessages = (props) => {
console.log(props);
let dialogElement = props.dialogsPage.dialogData.map (d => <DialogItem name={d.name} id={d.id}/>);
    
let messageElement = props.messagePage.messageData.map (m => <Message message={m.message}/>);

let newPostElement = React.createRef();
    
let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
}

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
             <div className={css.item}>
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
        </div>
    )
}

export default MayMessages
