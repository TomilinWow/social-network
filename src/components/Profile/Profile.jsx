import s from './Profile.module.css';


const Profile = () => {
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
                <textarea placeholder="Your new post..." cols="50" rows="3"></textarea>
                <div>
                    <button>Add post</button>
                </div>

            </div>
        </div>
    );

}

export default Profile;