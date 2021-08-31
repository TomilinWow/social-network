import {connect} from "react-redux";
import {
    addNewPost,
    updateNewMessageBody, getUsers
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
    }

    render() {

        if (!this.props.isAuth) return <Redirect to='/login'/>
        return <>

            {
                this.props.isReloaded ? <Preloader/> : null
            }
            <Profile {...this.props}
                     profile={this.props.profile}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}


export default compose(
    connect(mapStateToProps, {
        updateNewMessageBody,
        addNewPost,
        getUsers
    }),
    withRouter,
    withAuthRedirect
)(ProfilesContainer)

