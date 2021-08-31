import s from './MyProfile.module.css';
import React from "react";
import Preloader from "../../Tools/Preloader";
import profilePhoto from '../../../assets/images/user.png'


const MyProfile = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div className={s.profileWrapper}>
            <div className={s.profileImage}>
                <img src={props.profile.photos.large ? props.profile.photos.large: profilePhoto} alt=""/>
            </div>
            <div className={s.about}>
                <p>name: {props.profile.fullName}</p>

            </div>
        </div>
    );

}

export default MyProfile;