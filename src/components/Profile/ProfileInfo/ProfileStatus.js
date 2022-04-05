import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {


    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);


    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusThunkCreator(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode ?
                <div>
                    <span onDoubleClick={activateEditMode}>{!props.status? 'Статус пуст':props.status}</span>
                </div>
                :
                <div>
                    <input onChange={onStatusChange} value={status} autoFocus={true} onBlur={deactivateEditMode}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatus