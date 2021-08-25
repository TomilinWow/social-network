import s from './Dialog.module.css'

const Dialog = (props) =>{
    return (
        <div className={s.dialogItem}>
            <p>{props.item}</p>
        </div>
    )
}

export default Dialog;