import s from './Dialogs.module.css';
import React from "react";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {

    let newMessageElement = React.createRef();
    let messageItems = props.state.dialogsPage.messages.map(p => <Message item={p.text}/>)
    let dialogItems = props.state.dialogsPage.dialogs.map(d => <Dialog item={d.name}/>)

    const changeText = (text) => {
        text = newMessageElement.current.value
        props.changeText(text)
    }

    const sendMessage = () => {
        props.sendMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                <div className={s.messagesItems}>
                    {messageItems}
                </div>
                <div className={s.sendText}>
                    <textarea onChange={changeText}
                        ref={newMessageElement}
                        value={props.newMessageBody}
                        placeholder="Your text..."
                        cols="60" rows="1"/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;