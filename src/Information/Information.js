import React from 'react';
import css from './Information.module.css';
import Post from './MyPosts/Post/Post';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Information = props => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost}
            />
        </div>
    );
};

export default Information;
