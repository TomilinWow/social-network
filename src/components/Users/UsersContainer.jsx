import {connect} from "react-redux";
import {
    follow, getUsers,
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
        users: state.usersPage.users,
        pagesCount: state.usersPage.pagesCount,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isReloaded: state.usersPage.isReloaded,
        followingInProgress: state.usersPage.followingInProgress
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
            getUsers,
            toggleFollowingProgress
        }),
    withAuthRedirect
)(UsersContainer)
