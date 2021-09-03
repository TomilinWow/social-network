import React, {createRef} from "react";
import s from "./MyProfile.module.css"

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
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
        this.props.setStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        debugger
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        console.log("componentDidUpdate")
    }

    render() {
        return (
            <div className={s.status}>
                {(!this.state.editMode) &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Status is not defined'}</span>
                    </div>

                }
                {(this.state.editMode) &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.value}/>
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus;