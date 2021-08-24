import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

            </div>
            <div className={s.messages}>
                <div className={s.messagesItems}>

                </div>
                <div className={s.sendText}>
                    <textarea placeholder="Your text..." cols="60" rows="1"></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;