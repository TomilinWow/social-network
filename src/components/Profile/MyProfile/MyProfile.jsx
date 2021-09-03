import s from './MyProfile.module.css';
import React from "react";
import Preloader from "../../Tools/Preloader";
import profilePhoto from '../../../assets/images/user.png'
import ProfileStatus from "./ProfileStatus";

const MyProfile = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (<div>
        <div className={s.profileWrapper}>
            <div className={s.profileImage}>
                <img src={props.profile.photos.large ? props.profile.photos.large: profilePhoto} alt=""/>
            </div>
            <div className={s.about}>
                <p>{props.profile.fullName}</p>
                <ProfileStatus status={props.status} setStatus={props.setStatus}/>


            </div>
        </div>
    </div>

    );

}

export default MyProfile;