import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import React from "react";
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator";
import User from "./User";


let Users = ({
                 users,
                 followingInProgress,
                 unfollow,
                 follow,
                 currentPage,
                 totalUsersCount,
                 pagesCount,
                 onCurrentPageChanged
             }) => {

    return (
        <div>
            {
                users.map(u => <User user={u} key={u.id} followingInProgress={followingInProgress}
                                     unfollow={unfollow} follow={follow}/>)
            }
            <Paginator currentPage={currentPage}
                       totalUsersCount={totalUsersCount}
                       pagesCount={pagesCount}
                       onCurrentPageChanged={onCurrentPageChanged}
            />
        </div>
    )

}


export default Users;