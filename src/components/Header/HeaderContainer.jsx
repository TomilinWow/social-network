import {connect} from "react-redux";
import React from "react";
import {logout, setAuthUserData} from "../../redux/auth-reducer";
import Header from "./Header";


class HeaderContainer extends React.Component {

    render() {
        return <Header log={this.props.log}
                       isAuth={this.props.isAuth}
                       logout={this.props.logout}/>
    }
}

let mapStateToProps = (state) => {
    return {
        log: state.auth.login,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps,
    {
        setAuthUserData,
        logout
    })(HeaderContainer);
