import css from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';

const MyPosts = props => {
    let postsElement = props.posts.map(p => <Post message={p.post} MyrrCount={p.myrrCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={css.MyPosts}>
            <div className={css.item}>
                May posts
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={css.Post}>{postsElement}</div>
            </div>
        </div>
    );
};

export default MyPosts;
