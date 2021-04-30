import { useState, useEffect } from "react"
import React from 'react'
const ProfileStatusHook = (props) => {
    
    let [editMode, seteditMode] = useState(false);
    let [status, setStatus] = useState(props.status)
    useEffect (()=> {
        setStatus(props.status)
    },[props.status])
    const isActive = () => {
        seteditMode (true)
    }
    const isInactive = () => {
        seteditMode(false)
    }
    const inputChange = (e) => {
        setStatus(e.currentTarget.value)
        props.updateStatus(status)
    }

return (
    <div>
            {
        !editMode &&
                    <div>
                        <div onDoubleClick={isActive} >{status || '------'}</div>
                    </div>
            
        }
       { editMode && 
                    <div>
                        <div><input value = {status} autoFocus={true} onBlur = {isInactive} onChange = {inputChange}></input></div>
                    </div>
       }
        </div>    
    )
}

export default ProfileStatusHook