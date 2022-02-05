import css from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";


const MyPosts = (props) => {


let postsElement = props.postData.map(p => <Post message={p.post} MyrrCount={p.myrrCount}/>)

let newPostElement = React.createRef();
    
let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value='';
}

    return (<div className={css.MyPosts}>
            <div className={css.item}>
                May posts
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={css.Post}>
                    { postsElement }
                </div>
            </div>
        </div>
    )
}

export default MyPosts