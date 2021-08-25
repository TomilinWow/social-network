import s from './Profile.module.css';
import {addNewPostCreator, updateNewMessageBodyCreator} from "../../redux/profileReducer";
import React from "react";
import Post from "./Post/Post.jsx"

const Profile = (props) => {

    let newPostElement = React.createRef();
    let state = props.store.getState();
    let postItems = state.profilePage.posts.map( p => <Post text={p.text}/>)
    const changeText = () => {
        let body = newPostElement.current.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    const addPost = () => {
        props.store.dispatch(addNewPostCreator())
    }
    return (
        <div className={s.profile}>
            <div className={s.profileWrapper}>
                <div className={s.profileImage}>
                    <img src="https://robb.report/upload/custom/8c5/8c5cd6d84c19af7bbd4721f4797f234b.jpg" alt=""/>
                </div>
                <div className={s.about}>
                    <p>name: Ilon</p>
                    <p>lastname: Mask</p>
                    <p>date: 28.06.1971</p>

                </div>
            </div>
            <div className={s.posts}>
                <h3>My Posts</h3>
                <div className={s.postItems}>
                    {postItems}
                </div>
                <textarea onChange={changeText}
                          ref={newPostElement}
                          value={state.profilePage.newMessageBody}
                          placeholder="Your new post..." cols="50"
                          rows="3"/>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
        </div>
    );

}

export default Profile;