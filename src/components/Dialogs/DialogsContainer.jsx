import React from "react";
import {sendNewMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        state: state,
    }
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{sendNewMessageCreator})
)(Dialogs)
