import s from './Dialogs.module.css';
import React from "react";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {useForm} from "react-hook-form";

const FormForMessage = (props) => {
    const {register, handleSubmit} = useForm()
    return (
            <form onSubmit={handleSubmit(props.sendMessage)} >
                <textarea placeholder={'Your message...'} {...register('message')}/>
                <button>Send</button>

            </form>
        )


}


const Dialogs = (props) => {

    let messageItems = props.state.dialogsPage.messages.map(p => <Message item={p.text}/>)
    let dialogItems = props.state.dialogsPage.dialogs.map(d => <Dialog item={d.name}/>)


    const sendMessage = (value) => {
        props.sendNewMessageCreator(value.message)
    }
    // if (props.isAuth === false) return <Redirect to='/login'/>

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
                    <FormForMessage sendMessage={sendMessage}/>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;