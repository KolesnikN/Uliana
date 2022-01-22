import css from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

let postData = [
    {id: 1, post: 'Hi, how are you?', myrrCount: 15},
    {id: 2, post: 'My first post!', myrrCount: 25},
]

let postsElement = postData
    .map (p => <Post message={p.post} MyrrCount={p.myrrCount}/>);

const MyPosts = () => {
    return (<div className={css.MyPosts}>
            <div className={css.item}>
                May posts
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
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