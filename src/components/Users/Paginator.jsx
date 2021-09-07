import s from './Users.module.css'
import React from "react";

let Paginator = ({onCurrentPageChanged, currentPage, totalUsersCount, pagesCount}) => {

    let pageCount = Math.ceil(totalUsersCount / pagesCount);
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (

        <div className={s.paginator}>
            {pages.map(p => {
                return <span onClick={(e) => {
                    onCurrentPageChanged(p)
                }
                } className={currentPage === p && s.selectedPage}>{p}</span>
            })}
        </div>

    )
};


export default Paginator;