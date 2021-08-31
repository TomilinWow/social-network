import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import {login, setAuthUserData} from "../../redux/auth-reducer";
import Header from "./Header";



class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.login()
    }

    render() {
        debugger
        return <Header login={this.props.login}
                       isAuth={this.props.isAuth}/>

    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps,
    {
        setAuthUserData,
        login
    })(HeaderContainer);
