import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import Users from "./Users";
import React from "react";
import * as axios from "axios";


class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesCount}`).then(response => {
            this.props.setUsers(response.data.items)

            // this.props.setTotalUserCount(response.data.totalCount)
        })
    }

    onCurrentPageChanged = (pageId) => {
        this.props.setCurrentPageId(pageId)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageId}&count=${this.props.pagesCount}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        return <Users users={this.props.users}
                      pagesCount={this.props.pagesCount}
                      follow={this.props.follow}
                      totalUsersCount={this.props.totalUsersCount}
                      unfollow={this.props.unfollow}
                      currentPage={this.props.currentPage}
                      onCurrentPageChanged={this.onCurrentPageChanged}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagesCount: state.usersPage.pagesCount,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPageId: (pageId) => {
            dispatch(setCurrentPageAC(pageId))
        },
        setTotalUserCount: (count) => {
            dispatch(setTotalUsersCountAC(count))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
