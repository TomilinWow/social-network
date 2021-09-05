import React, {useEffect, useState} from "react";
import s from "./MyProfile.module.css"

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.setStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={s.status}>
            {(!editMode) &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || 'Status is not defined'}</span>
            </div>

            }
            {(editMode) &&
            <div>
                <input onBlur={deactivateEditMode}
                       onChange={onStatusChange}
                       autoFocus={true}
                       value={status}/>
            </div>
            }
        </div>
    )


}

export default ProfileStatus;