import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import React from "react";

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
                            <img src={u.photos.small ? u.photos.small : userPhoto} alt=""/>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollowed</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Followed</button>
                                }
                            </div>
                        </div>
                        <div className={s.userInfo}>
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
}


export default Users;