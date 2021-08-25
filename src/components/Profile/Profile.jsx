import s from './Profile.module.css';
import {addNewPostCreator, updateNewMessageBodyCreator} from "../../redux/profileReducer";
import React from "react";
import Post from "./Post/Post.jsx"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import MyProfile from "./MyProfile/MyProfile";

const Profile = (props) => {

    return (
        <div className={s.profile}>
            <MyProfile/>
            <MyPostsContainer store={props.store}/>
        </div>
    );

}

export default Profile;