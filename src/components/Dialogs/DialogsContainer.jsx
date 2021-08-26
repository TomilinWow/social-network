import React from "react";
import {sendNewMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newMessageBody: state.dialogsPage.newMessageBody,
        state: state
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeText: (text) => {
            dispatch(updateNewMessageBodyCreator(text))
        },
        sendMessage: () => {
            dispatch(sendNewMessageCreator())
        }

    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer;