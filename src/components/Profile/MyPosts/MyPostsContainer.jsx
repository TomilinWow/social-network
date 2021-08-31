import React from "react";
import MyPosts from "./MyPosts";
import {addNewPost, updateNewMessageBody} from "../../../redux/profile-reducer";
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
            dispatch(updateNewMessageBody(text))
        },
        addPost: () => {
            dispatch(addNewPost())
        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;