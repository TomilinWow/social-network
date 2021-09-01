import React from "react";
import s from "./MyProfile.module.css"

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className={s.status}>
                {(!this.state.editMode) &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>

                }
                {(this.state.editMode) &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.value}/>
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus;