
import React from "react";
import MyPosts from "./MyPosts";
import {addNewPostCreator, updateNewMessageBodyCreator} from "../../../redux/profileReducer";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    const changeText = (text) => {
        props.store.dispatch(updateNewMessageBodyCreator(text))
    }

    const addPost = () => {
        props.store.dispatch(addNewPostCreator())
    }

    return (
        <MyPosts changeText={changeText}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newMessageBody={state.profilePage.newMessageBody}/>

    );

}

export default MyPostsContainer;