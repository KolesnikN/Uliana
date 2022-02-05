import React from 'react';
import css from './Information.module.css';
import Post from "./MyPosts/Post/Post";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Information = (props) => {

    return (
            <div>
                <ProfileInfo/>
                <MyPosts postData={props.profilePage.postData} addPost={props.addPost}/>
            </div>
        )
}

export default Information;