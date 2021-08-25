import s from "./Post.module.css"
const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://robb.report/upload/custom/8c5/8c5cd6d84c19af7bbd4721f4797f234b.jpg" alt=""/>
            <div>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Post;