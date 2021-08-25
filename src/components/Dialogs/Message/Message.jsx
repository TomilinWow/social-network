import s from './Message.module.css'

const Message = (props) =>{
    return (
        <div className={s.MessageItem}>
            {props.item}
        </div>
    )
}

export default Message;