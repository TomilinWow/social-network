import s from './MyPosts.module.css';
import React from "react";
import Post from "../Post/Post";


const MyPosts = (props) => {

    let newPostElement = React.createRef();
    let postItems = props.posts.map(p => <Post text={p.text}/>)

    const changeText = () => {
        let body = newPostElement.current.value;
        props.changeText(body)
    }

    const addPost = () => {
        props.addPost()
    }

    return (
        <div className={s.posts}>
            <h3>My Posts</h3>
            <div className={s.postItems}>
                {postItems}
            </div>
            <textarea onChange={changeText}
                      ref={newPostElement}
                      value={props.newMessageBody}
                      placeholder="Your new post..." cols="50"
                      rows="3"/>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
    );
}

export default MyPosts;