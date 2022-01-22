import React from 'react';
import css from './Information.module.css';
import Post from "./MyPosts/Post/Post";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Information = () => {
    return (
            <div>
                <ProfileInfo/>
                <MyPosts/>
            </div>
        )
}

export default Information;