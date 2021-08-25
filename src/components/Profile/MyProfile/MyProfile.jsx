import s from './MyProfile.module.css';
import React from "react";


const MyProfile = (props) => {

    return (
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
    );

}

export default MyProfile;