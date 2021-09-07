import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import React from "react";
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator";


let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            <div className={s.userContent}>
                <div className={s.userFollow}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small ? user.photos.small : userPhoto} alt=""/>
                    </NavLink>

                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>Unfollowed</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>Followed</button>
                        }
                    </div>
                </div>
                <div className={s.userInfo}>m
                    {user.name}
                </div>
                <div className={s.userLocale}>
                    {"user.location.city"}
                </div>
            </div>
        </div>)


}


export default User;