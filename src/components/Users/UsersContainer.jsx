import {connect} from "react-redux";
import {
    follow, requestUsers,
    reloader,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from '../Tools/Preloader'
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsReloaded,
    getPageCount,
    getTotalUsersCount,
    getUsers
} from "../../redux/user-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pagesCount)
    }


    onCurrentPageChanged = (pageId) => {
        this.props.setCurrentPage(pageId)
        this.props.getUsers(pageId, this.props.pagesCount)
    }


    render() {

        return <>
            {
                this.props.isReloaded ? <Preloader/> : null
            }
            <Users users={this.props.users}
                   pagesCount={this.props.pagesCount}
                   follow={this.props.follow}
                   totalUsersCount={this.props.totalUsersCount}
                   unfollow={this.props.unfollow}
                   currentPage={this.props.currentPage}
                   onCurrentPageChanged={this.onCurrentPageChanged}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pagesCount: getPageCount(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isReloaded: getIsReloaded(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps,
        {
            follow,
            unfollow,
            setUsers,
            setCurrentPage,
            setTotalUsersCount,
            reloader,
            getUsers: requestUsers,
            toggleFollowingProgress
        }),
    withAuthRedirect
)(UsersContainer)
