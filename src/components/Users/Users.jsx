import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import React from "react";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import axios from "axios";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pagesCount);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={s.userContent}>
                        <div className={s.userFollow}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small ? u.photos.small : userPhoto} alt=""/>
                            </NavLink>

                            <div>
                                {u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollowed</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.follow(u.id)
                                    }}>Followed</button>
                                }
                            </div>
                        </div>
                        <div className={s.userInfo}>m
                            {u.name}
                        </div>
                        <div className={s.userLocale}>
                            {"u.location.city"}
                        </div>
                    </div>
                </div>)
            }
            <div className={s.paginator}>
                {pages.map(p => {
                    return <span onClick={(e) => {
                        props.onCurrentPageChanged(p)
                    }
                    } className={props.currentPage === p && s.selectedPage}>{p}</span>
                })}
            </div>
        </div>
    )
};


export default Users;