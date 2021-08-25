import React from "react";
import {sendNewMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
const DialogsContainer = (props) => {

    let state = props.store.getState()


    const changeText = (text) => {
        props.store.dispatch(updateNewMessageBodyCreator(text))
    }

    const sendMessage = () => {
        props.store.dispatch(sendNewMessageCreator())
    }

    return (
        <Dialogs changeText={changeText}
                 sendMessage={sendMessage}
                 newMessageBody={state.dialogsPage.newMessageBody}
                 state={state}/>
    );
}

export default DialogsContainer;