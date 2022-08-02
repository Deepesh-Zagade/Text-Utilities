import React from 'react'

export default function Alert(props) {
    const capitalize = (word) =>{
        let res = word.toLowerCase()
        return res.charAt(0).toUpperCase() + res.slice(1)
    }
    return (
        <div style={{height: '40px'}} >
        {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}: </strong>{props.alert.msg}
        </div>}
        </div>
    )
}
