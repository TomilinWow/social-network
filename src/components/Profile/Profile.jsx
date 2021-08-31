import s from './Profile.module.css';
import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import MyProfile from "./MyProfile/MyProfile";

const Profile = (props) => {

    return (
        <div className={s.profile}>
            <MyProfile profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );

}

export default Profile;