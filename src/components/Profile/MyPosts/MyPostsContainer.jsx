import React from "react";
import MyPosts from "./MyPosts";
import {addNewPostCreator, updateNewMessageBodyCreator} from "../../../redux/profileReducer";
import {sendNewMessageCreator} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newMessageBody: state.profilePage.newMessageBody,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeText: (text) => {
            dispatch(updateNewMessageBodyCreator(text))
        },
        addPost: () => {
            dispatch(addNewPostCreator())
        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;