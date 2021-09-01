import {connect} from "react-redux";
import {
    addNewPost,
    updateNewMessageBody, getUsers, setStatus
} from "../../redux/profile-reducer";
import Preloader from '../Tools/Preloader'
import React from "react";
import Profile from "./Profile";
import {Redirect, withRouter} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfilesContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUsers(userId)
        this.props.setStatus(userId)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to='/login'/>
        return <>

            {
                this.props.isReloaded ? <Preloader/> : null
            }
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
    }
}


export default compose(
    connect(mapStateToProps, {
        updateNewMessageBody,
        addNewPost,
        getUsers,
        setStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfilesContainer)

