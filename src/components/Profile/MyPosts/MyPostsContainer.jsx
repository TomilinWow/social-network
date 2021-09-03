import React from "react";
import MyPosts from "./MyPosts";
import {addNewPost} from "../../../redux/profile-reducer";
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
        addPost: (text) => {
            dispatch(addNewPost(text))
        }

    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(MyPosts);