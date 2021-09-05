import s from './MyPosts.module.css';
import React from "react";
import Post from "../Post/Post";
import {useForm} from "react-hook-form";


const FormMyPost = (props) => {
    const {register, handleSubmit, formState: { errors }} = useForm()
    return <form onSubmit={handleSubmit(props.addNewPost)}>
        <textarea placeholder={'Your text...'} {...register('post', {required: true })} />
        {errors.post && <span className={s.error}>This field is required</span>}
        <div>
            <button>Add post</button>
        </div>
    </form>

}

const MyPosts = props => {
        console.log('render')
        let postItems = props.posts.map(p => <Post text={p.text}/>)

        let addNewPost = (value) => {
            props.addPost(value.post)

        }

        return (
            <div className={s.posts}>
                <h3>My Posts</h3>
                <div className={s.postItems}>
                    {postItems}
                </div>
                <FormMyPost addNewPost={addNewPost}/>
            </div>
        );
    }


export default MyPosts;