import css from "./Post.module.css";
import React from "react";

const Post = (props) => {
debugger
    return ( <div className={css.Post}>
        <div className={css.item}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cat_Sphynx._Kittens._img_11.jpg/2560px-Cat_Sphynx._Kittens._img_11.jpg"/>
            {props.message}

            <div> Myrr: {props.MyrrCount} </div>
            <div className={css.item}>
                <button>Myrr</button>
            </div>
        </div>
    </div>
 )
}

export default Post