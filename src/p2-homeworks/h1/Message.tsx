import React from 'react'

type propsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

const Message = ( props:propsType ) => {
    return (
        <div>
            {props.avatar}
            {props.name}
            {props.message}
            {props.time}
        </div>
    )
}

export default Message
