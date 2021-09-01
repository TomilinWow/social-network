import React from "react";
import MyPosts from "./MyPosts";
import {addNewPost, updateNewMessageBody} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {compose} from "redux";


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


export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(MyPosts);